// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { AmbulatoryOperativeClaim } from './ambulatory-operative-claim';
import type { CodeValue } from './code-value';
import type { ContactPerson } from './contact-person';
import type { ReferantDecision } from './referant-decision';

export interface AmbulatorySuperClaim {
  readonly automaticClaimFlag: boolean;
  readonly className: 'il.co.migdal.ins.ambulatory.model.AmbulatorySuperClaim';
  readonly contactPersons: readonly (ContactPerson)[];
  readonly conversionFlag: boolean;
  readonly familyHeadConfiscationFlag: boolean;
  readonly insuredAddressChange: boolean;
  readonly insuredConfiscationFlag: boolean;
  readonly insuredDebt: boolean;
  readonly insuredDetailsChange: boolean;
  readonly insuredDetailsNotExist: boolean;
  readonly irregularSuperClaimFlag: boolean;
  readonly lastUpdateDate: ISODateTimeString;
  readonly medicalEventDate: ISODateTimeString;
  readonly needToRefreshData: boolean;
  readonly operativeClaims: readonly (AmbulatoryOperativeClaim)[];
  readonly otherActiveClaim: boolean;
  readonly referantDecision: ReferantDecision;
  readonly requestedExpertise: CodeValue;
  readonly sendSMSFlag: boolean;
  readonly smsWasSentFlag: boolean;
  readonly submitedBy: number;
  readonly superClaimNum: number;
  readonly superClaimOrigStatus: CodeValue;
  readonly superClaimType: CodeValue;
}
