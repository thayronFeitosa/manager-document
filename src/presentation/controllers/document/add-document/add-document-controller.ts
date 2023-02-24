import { IAddDocument } from "../../../../domain/usecases/add-document";
import { IController } from "../../../protocols/controller";
import { IHttpRequest, IHttpResponse } from "../../../protocols/http";
import { IValidation } from "../../../protocols/IValidation";

export class AddDocumentController implements IController {
    constructor(
        private readonly validation: IValidation,
        private readonly addDocument: IAddDocument
    ) { }

    async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        return new Promise<IHttpResponse>((resolve, reject) => resolve(null))
    }

}