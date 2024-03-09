import express, {Request, Response} from "express";

import {Pet} from "../../types/pet";
import {PetsRepo, ScansRepo} from "../../repos/globalRepos";
import {hasIdParam, validatePetCreation, validatePetUpdate} from "../../../middlewares/validators";

const petRouter = express.Router();

petRouter.get("/", async (req: Request, res: Response) => {
    res.send(await PetsRepo.getAllPets());
});

petRouter.get("/:id", hasIdParam, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const pet = await PetsRepo.getPetById(id);

    if (pet) {
        res.send(pet);
    } else {
        res.status(404).send({error: "Pet not found."});
    }
});

petRouter.post("/", validatePetCreation, async (req: Request, res: Response) => {
    const {petName, age, breedId} = req.body;

    try {
        const queryRes = await PetsRepo.createPet(petName, breedId, age);
        res.status(201).send(queryRes);
    } catch (e: any) {
        res.status(500).send({error: e});
    }
});

petRouter.delete("/:id", hasIdParam, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const queryRes = await PetsRepo.deletePet(id);
    queryRes ? res.status(204).send() : res.status(500).send('Error deleting pet');
});

petRouter.put("/:id", validatePetUpdate, async (req: Request, res: Response) => {
    const {petName, age, breedId} = req.body;
    const pet: Partial<Pet> = {petName, age, breedId};
    pet.id = parseInt(req.params.id);

    try {
        const queryRes = await PetsRepo.updatePet(pet);
        res.status(200).send(queryRes);

    } catch (e: any) {
        res.status(500).send({error: e});
    }
});

petRouter.get("/:id/scans", hasIdParam, async (req: Request, res: Response) => {
    const petId = parseInt(req.params.id);
    const scans = await ScansRepo.getAllScansForPet(petId);

    res.send(scans);
});


export default petRouter;