import {BreedService} from "../services/breedService";
import {PetService} from "../services/petService";
import {ScansService} from "../services/scansService";
import {IBreedService} from "../interfaces/IBreedService";
import {IPetService} from "../interfaces/IPetService";
import {IScanService} from "../interfaces/IScanService";

const BreedsRepo: IBreedService = new BreedService()

const PetsRepo: IPetService = new PetService();

const ScansRepo: IScanService = new ScansService();

export {BreedsRepo, PetsRepo, ScansRepo};