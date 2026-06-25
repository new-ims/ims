// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { ClaimAdditionalData } from './claim-additional-data';
import type { DocumentMissingReasons } from './document-missing-reasons';
import type { DocumentType } from './document-type';
import type { ScannedDocument } from './scanned-document';

export interface RequestedDocument {
  readonly addDate: ISODateTimeString;
  readonly additionalData?: ClaimAdditionalData;
  readonly approved?: number;
  readonly className: 'il.co.migdal.ins.entities.document.RequestedDocument';
  readonly documentMissingReasons: readonly (DocumentMissingReasons)[];
  readonly documentName: string;
  readonly documentType: DocumentType;
  readonly forDoctorReview: boolean;
  readonly id: string;
  readonly mandatory: boolean;
  readonly openExtraDataWin: boolean;
  readonly overridingDocument: boolean;
  readonly primaryScannedDocument?: ScannedDocument;
  readonly scannedDocumentsSet: readonly (ScannedDocument)[];
  readonly status: 'RECEIVED' | 'RECEIVED_MANUALLY';
  readonly suffix: string;
}
