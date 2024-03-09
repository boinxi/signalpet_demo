import {NextFunction, Request, Response} from 'express';

export const hasIdParam = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send({error: "Invalid ID provided."});
    }
    next();
};

export const validatePetUpdate = (req: Request, res: Response, next: NextFunction) => {
    const {petName, age, breedId} = req.body;
    const petId = parseInt(req.params.id);

    if (isNaN(petId)) {
        return res.status(400).send({error: "Invalid pet ID."});
    }
    if (!petName && !age && !breedId) {
        return res.status(400).send({error: "No fields to update."});
    }
    if (age !== undefined && age < 0) {
        return res.status(400).send({error: "Age must be a positive number."});
    }
    next();
};

export const validatePetCreation = (req: Request, res: Response, next: NextFunction) => {
    const {petName, age, breedId} = req.body;

    if (!petName || !age || !breedId) {
        return res.status(400).send({error: "Missing required fields."});
    }
    if (age < 0) {
        return res.status(400).send({error: "Age must be a positive number."});
    }
    next();
};

