import express, {Request, Response} from "express";
import {BreedsRepo} from "../../repos/globalRepos";
import {hasIdParam} from "../../../middlewares/validators";

const breedRouter = express.Router();

breedRouter.get('/', async (req: Request, res: Response) => {
    res.send(await BreedsRepo.getAllBreeds());
});

breedRouter.get('/:id', hasIdParam, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const breed = await BreedsRepo.getBreedById(id);

    if (breed) {
        res.send(breed);
    } else {
        res.status(404).send({error: "Breed not found."});
    }
});

export default breedRouter;

