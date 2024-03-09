import {v2 as cloudinary} from 'cloudinary';
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';

const {CloudinaryStorage} = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'demo',
        format: async (req: Request, file: Express.Multer.File) => 'png',
        public_id: (req: Request, file: Express.Multer.File) => uuidv4(),
    },
});

const parser = multer({storage: storage});

export default parser;
