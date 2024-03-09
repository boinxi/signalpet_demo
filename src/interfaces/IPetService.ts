import { Pet } from "../types/pet";

export interface IPetService {
    getAllPets(): Promise<Pet[]>;
    getPetById(id: number): Promise<Pet | null>;
    createPet(petName: string, breedId: number, age: number): Promise<Pet>;
    updatePet(pet: Partial<Pet>): Promise<number>;
    deletePet(id: number): Promise<number>;
}