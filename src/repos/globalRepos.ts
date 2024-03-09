import {BreedService} from "../services/breedService";
import {PetService} from "../services/petService";
import {ScansService} from "../services/scans";

const BreedsRepo = new BreedService()

const PetsRepo = new PetService();

const ScansRepo = new ScansService();

export {BreedsRepo, PetsRepo, ScansRepo};