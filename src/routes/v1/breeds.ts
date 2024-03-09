import express, {Request, Response} from "express";
import {BreedsRepo} from "../../repos/globalRepos";

const breedRouter = express.Router();

breedRouter.get('/', async (req: Request, res: Response) => {
    res.send(await BreedsRepo.getAllBreeds());
});

breedRouter.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send({error: "Invalid breed ID."});
    }
    const breed = await BreedsRepo.getBreedById(id);

    if (breed) {
        res.send(breed);
    } else {
        res.status(404).send({error: "Breed not found."});
    }
});

export default breedRouter;

