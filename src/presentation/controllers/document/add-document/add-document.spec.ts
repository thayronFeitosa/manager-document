import { IValidation } from '../../../protocols/IValidation'
import { IAddDocument, IAddDocumentModel } from '../../../../domain/usecases/add-document'
import { IDocumentModel } from '../../../../model/document';
import { AddDocumentController } from './add-document-controller'

const makeValidationStub = (): IValidation => {
  class MakeValidationStub implements IValidation {
    validate(input: any): Error | null {
      return null;
    }
  }
  return new MakeValidationStub()
}

const makeFakeAddDocument = (): IDocumentModel => ({
  id: 1,
  name: 'any_name',
  path: 'any_path',
  size: 1,
  type: 'any_type',
  created_at: 'any_created_at',
  updated_at: 'any_updated_at',
})

const makeAddDocumentStub = (): IAddDocument => {
  class MakeAddDocumentStub implements IAddDocument {
    async add(document: IAddDocumentModel): Promise<IDocumentModel | null> {
      return new Promise((resolve, reject) => resolve(makeFakeAddDocument()))
    }
  }
  return new MakeAddDocumentStub()
}


interface ITypeSut {
  sut: AddDocumentController,
  validationStub: IValidation,
  addDocumentStub: IAddDocument

}

const makeSut = (): ITypeSut => {
  const validationStub = makeValidationStub()
  const addDocumentStub = makeAddDocumentStub()
  const sut = new AddDocumentController(validationStub, addDocumentStub)

  return {
    sut,
    addDocumentStub,
    validationStub
  }
}

describe('AddDocument Controller', () => {
  test('Should return 400 if Validation fails', () => {
    const { } = makeSut()
  })
})
