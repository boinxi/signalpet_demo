import {Breed} from "../types/breed";

export interface IBreedService {
    getAllBreeds(): Promise<Breed[]>;
    getBreedById(id: number): Promise<Breed | null>
}