export interface IDocumentModel {
    id: number;
    name: string;
    path: string;
    size: number;
    type: string;
    created_at: string | Date;
    updated_at: string | Date
}