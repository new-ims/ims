// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { DocumentType } from './document-type';
import type { Shape1 } from './shape-1';

export interface ScannedDocument {
  readonly agentReceivedDate?: ISODateTimeString;
  readonly approved?: number;
  readonly className: 'il.co.migdal.ins.entities.document.ScannedDocument';
  readonly documentName: string;
  readonly documentType: DocumentType;
  readonly extraData: Shape1;
  readonly forDoctorReview: boolean;
  readonly id: string;
  readonly internalNumber: number;
  readonly mailboxCode?: number;
  readonly receivedDate?: ISODateTimeString;
  readonly requireReply: boolean;
  readonly scanId?: '0900234787639453' | '0900234787655799' | '0900234787674700' | '0900234787709253' | '0900234787709259' | '0900234787709674' | '0900234787710030' | '0900234787710034' | '0900234787757052' | '0900234787757053' | '0900234787757054';
  readonly scaningDate?: ISODateTimeString;
  readonly status: 'RECEIVED' | 'RECEIVED_MANUALLY';
  readonly suffix: string;
}
