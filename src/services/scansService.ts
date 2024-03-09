import {query} from "../storage/db";
import {Scan} from "../types/scan";
import {IScanService} from "../interfaces/IScanService";

export class ScansService implements IScanService {
    async getScanById(id: number): Promise<Scan | null> {
        const result = await query<Scan>('SELECT * FROM scans WHERE id = $1', [id]);
        return result?.length ? result[0] : null;
    }

    async getAllScansForPet(petId: number): Promise<Scan[]> {
        return await query<Scan>('SELECT * FROM scans WHERE pet_id = $1', [petId]);
    }

    async createScan(petId: number, imageUrl: string): Promise<Scan | null> {
        const result = await query<Scan>('INSERT INTO scans (pet_id, image_url) VALUES ($1, $2) RETURNING *', [petId, imageUrl]);
        return result.length ? result[0] : null;
    }
}