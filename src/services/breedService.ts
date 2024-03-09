import {query} from "../storage/db";
import {Breed} from "../types/breed";
import {IBreedService} from "../interfaces/IBreedService";

export class BreedService implements IBreedService {
    async getAllBreeds(): Promise<Breed[]> {
        return await query('SELECT * FROM breeds');
    }

    async getBreedById(id: number): Promise<Breed | null> {
        const result = await query('SELECT * FROM breeds WHERE id = $1', [id]);
        return result?.length ? result[0] : null;
    }
}