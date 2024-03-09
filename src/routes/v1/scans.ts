import express, {Request, Response} from "express";
import parser from "../../storage/cloudinary";
import {ScansRepo} from "../../repos/globalRepos";
import {hasIdParam} from "../../../middlewares/validators";

const scanRouter = express.Router();

scanRouter.get("/:id", hasIdParam, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const scan = await ScansRepo.getScanById(id);

    if (scan) {
        res.send(scan);
    } else {
        res.status(404).send({error: "Scan not found."});
    }
});


scanRouter.post("/", parser.single('image'), async (req: Request, res: Response) => {
    const {petId} = req.body;

    if (!petId) {
        return res.status(400).send('Pet ID is required.');
    }
    if (!req.file) {
        return res.status(400).send('No image file uploaded.');
    }

    const file = req.file;
    try {
        const result = await ScansRepo.createScan(petId, file.path);
        res.json(result);
    } catch (e: any) {
        res.status(500).send({error: e});
    }
});

export default scanRouter;