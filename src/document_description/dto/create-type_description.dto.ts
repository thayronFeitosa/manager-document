export class CreateTypeDescriptionDto {
  description: string;
  accountValue: string;
  firstDate: Date;
  endDate: Date;
  annex: string;
  idTypeDoc: number;
  nameAnnex: string;
  sizeFile: number;
  urlPath: string;
}

export class DocumentDto {
  nameAnnex: string;
  sizeFile: number;
  urlPath: string;
}
