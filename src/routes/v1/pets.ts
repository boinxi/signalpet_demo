import express, {Request, Response} from "express";

import {Pet} from "../../types/pet";
import {PetsRepo, ScansRepo} from "../../repos/globalRepos";

const petRouter = express.Router();

petRouter.get("/", async (req: Request, res: Response) => {
    res.send(await PetsRepo.getAllPets());
});

petRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send({error: "Invalid pet ID."});
    }
    const pet = await PetsRepo.getPetById(id);

    if (pet) {
        res.send(pet);
    } else {
        res.status(404).send({error: "Pet not found."});
    }
});

petRouter.post("/", async (req: Request, res: Response) => {
    const {petName, age, breedId} = req.body;

    if (!petName || !age || !breedId) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const queryRes = await PetsRepo.createPet(petName, breedId, age);
        res.status(201).send(queryRes);
    } catch (e: any) {
        res.status(500).send({error: e});
    }
});

petRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send({error: "Invalid pet ID."});
    }

    const queryRes = await PetsRepo.deletePet(id);
    queryRes ? res.status(204).send() : res.status(500).send('Error deleting pet');
});

petRouter.put("/:id", async (req: Request, res: Response) => {
    const {petName, age, breedId} = req.body;
    const pet: Partial<Pet> = {petName, age, breedId};
    pet.id = parseInt(req.params.id);

    if (isNaN(pet.id)) {
        return res.status(400).send({error: "Invalid pet ID."});
    }

    if (!pet.petName && !pet.age && !pet.breedId) {
        return res.status(400).send({error: "No fields to update."});
    }

    if (pet.age && pet.age < 0) {
        return res.status(400).send({error: "Age must be a positive number."});
    }

    try {
        const queryRes = await PetsRepo.updatePet(pet);
        res.status(200).send(queryRes);

    } catch (e: any) {
        res.status(500).send({error: e});
    }
});

petRouter.get("/:petId/scans", async (req: Request, res: Response) => {
    const petId = parseInt(req.params.petId);
    if (isNaN(petId)) {
        return res.status(400).send({error: "Invalid pet ID."});
    }
    const scans = await ScansRepo.getAllScansForPet(petId);

    res.send(scans);
});


export default petRouter;