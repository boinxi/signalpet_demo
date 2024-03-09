import { Scan } from "../types/scan";

export interface IScanService {
    getScanById(id: number): Promise<Scan | null>;
    getAllScansForPet(petId: number): Promise<Scan[]>;
    createScan(petId: number, imageUrl: string): Promise<Scan | null>;
}