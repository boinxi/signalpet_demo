import {NextFunction, Request, Response} from 'express';
import Joi, {Schema} from 'joi';
import {logger} from "../src/logger";

export const hasIdParam = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send({error: "Invalid ID provided."});
    }
    next();
};

export function validateRequestBody(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const {error} = schema.validate(req.body, {abortEarly: false});
        if (error) {
            const messages = error.details.map(detail => detail.message);
            logger.info('Schema validation: ' + messages)
            res.status(400).json({errors: messages});
        } else {
            next();
        }
    };
}

export const petUpdateSchema = Joi.object({
    petName: Joi.string().optional(),
    age: Joi.number().positive().optional(),
    breedId: Joi.number().positive().optional()
}).or('petName', 'age', 'breedId');

export const petCreationSchema = Joi.object({
    petName: Joi.string().required(),
    age: Joi.number().positive().required(),
    breedId: Joi.number().positive().required()
});