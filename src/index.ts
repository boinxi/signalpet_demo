import express, {Express} from "express";
import dotenv from "dotenv";
import v1Router from "./routes";
import {v2 as cloudinary} from 'cloudinary';
import {loggerMiddleware} from "../middlewares/logger";
import {logger} from "./logger";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(loggerMiddleware);

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.use('/v1', v1Router);

app.listen(port, () => {
    logger.info(`[server]: Server is running at http://localhost:${port}`);
});
