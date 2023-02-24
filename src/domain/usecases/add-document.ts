import { IDocumentModel } from "../../model/document";

export interface IAddDocumentModel {
    name: string;
    path: string;
    size: number;
    type: string;
    created_at: string | Date;
    updated_at: string | Date
}

export interface IAddDocument {
    add(document: IAddDocumentModel): Promise<IDocumentModel | null>
}