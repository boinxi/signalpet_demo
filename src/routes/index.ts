import express from "express";
import breedRouter from "./v1/breeds";
import petRouter from "./v1/pets";
import scanRouter from "./v1/scans";

const v1Router = express.Router();

v1Router.use('/breeds', breedRouter);
v1Router.use('/pets', petRouter);
v1Router.use('/scans', scanRouter);

export default v1Router;
