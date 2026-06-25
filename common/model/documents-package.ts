// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { ProcessLetterData } from './process-letter-data';
import type { RequestedDocument } from './requested-document';

export interface DocumentsPackage {
  readonly className: 'il.co.migdal.ins.entities.document.DocumentsPackage';
  readonly documents: readonly (RequestedDocument)[];
  readonly documentSequence: number;
  readonly firstDocumentArrivalDate: ISODateTimeString;
  readonly freezeFullKitDate: boolean;
  readonly lastDocumentArrivalDate: ISODateTimeString;
  readonly letterSequence: number;
  readonly rejectionLetterData: ProcessLetterData;
}
