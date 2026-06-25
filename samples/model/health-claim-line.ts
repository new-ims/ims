// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { CodeValue } from './code-value';

export interface HealthClaimLine {
  readonly additionalServiceCompletion: boolean;
  readonly as400ObligationCreate: boolean;
  readonly bestInvolve: boolean;
  readonly claimApprovalType: CodeValue;
  readonly claimLineIdentification: number;
  readonly claimLineStatusId: number;
  readonly claimLineTypeID?: number;
  readonly className: 'il.co.migdal.ins.shared.model.HealthClaimLine';
  readonly createDate: ISODateTimeString;
  readonly createUserId: '22222' | '333333';
  readonly currencyID: number;
  readonly derivedFromPreliminaryState: boolean;
  readonly doctorSettlement: boolean;
  readonly documentId: string;
  readonly excludeFromAS400: boolean;
  readonly forcedApprovalReasonID?: number;
  readonly freezeFullKitDateFlagC: boolean;
  readonly freezeLiabilityDateFlagC: boolean;
  readonly freezePaymentDateFlagC: boolean;
  readonly medicalServiceQuantity: number;
  readonly receiptReferenceNumber?: number;
  readonly relevant?: boolean;
  readonly saveDocumentsReceivedDate: boolean;
  readonly surgeryRecommended: boolean;
}
