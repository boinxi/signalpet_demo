import {query} from "../storage/db";
import {Pet} from "../types/pet";
import {IPetService} from "../interfaces/IPetService";

export class PetService implements IPetService {
    async getAllPets(): Promise<Pet[]> {
        return await query('SELECT * FROM pets');
    }

    async getPetById(id: number): Promise<Pet | null> {
        const result = await query<Pet>('SELECT * FROM pets WHERE id = $1', [id]);
        return result?.length ? result[0] : null;

    }

    async createPet(petName: string, breedId: number, age: number): Promise<Pet | null> {
        const result = await query<Pet>('INSERT INTO pets (pet_name, age, breed_id) VALUES ($1, $2, $3) RETURNING *', [petName, age, breedId]);
        return result.length ? result[0] : null;
    }

    async updatePet(pet: Partial<Pet>): Promise<Pet | null> {
        if (!pet.id) throw new Error('No pet ID provided');

        let queryText = 'UPDATE pets SET';
        const queryParams: (string | number)[] = [];
        const setClauses: string[] = [];
        let paramCounter = 1;

        if (pet.petName !== undefined) {
            queryParams.push(pet.petName);
            setClauses.push(`pet_name = $${paramCounter++}`);
        }
        if (pet.age !== undefined) {
            queryParams.push(pet.age);
            setClauses.push(`age = $${paramCounter++}`);
        }
        if (pet.breedId !== undefined) {
            queryParams.push(pet.breedId);
            setClauses.push(`breed_id = $${paramCounter++}`);
        }

        queryParams.push(pet.id);
        queryText += ` ${setClauses.join(', ')} WHERE id = $${paramCounter} RETURNING *`;

        const result = await query<Pet>(queryText, queryParams);
        return result.length ? result[0] : null;
    }

    async deletePet(id: number): Promise<Pet | null> {
        const result = await query<Pet>('DELETE FROM pets WHERE id = $1 RETURNING id', [id]);
        return result.length ? result[0] : null;
    }
}