// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { CodeValue } from './code-value';
import type { ReferantDecision } from './referant-decision';

export interface HealthClaimCoverage {
  readonly baseRate: boolean;
  readonly benefitNumber: number;
  readonly claimType?: CodeValue;
  readonly className: 'il.co.migdal.ins.shared.model.HealthClaimCoverage';
  readonly coverageEndDate: ISODateTimeString;
  readonly coverageStartDate: ISODateTimeString;
  readonly coverID: number;
  readonly currencyID: number;
  readonly elementaryRate: boolean;
  readonly filler1: boolean;
  readonly filler2: boolean;
  readonly filler3: boolean;
  readonly filler4: boolean;
  readonly isReferantDecisionNEdoctorDecision: boolean;
  readonly L2KIndex: number;
  readonly optional: boolean;
  readonly paymentDelay: boolean;
  readonly policyID: number;
  readonly professionalAddition: boolean;
  readonly rate: CodeValue;
  readonly rateException: boolean;
  readonly rateMedicalAddition: boolean;
  readonly rateSectionID: number;
  readonly recommendedRate: boolean;
  readonly referantDecision: ReferantDecision;
  readonly registeredFreeSection: boolean;
  readonly reserve2: boolean;
  readonly reserve3: boolean;
  readonly reserve4: boolean;
  readonly selected: boolean;
  readonly statusDesciption: string;
  readonly suspectedConcealment: boolean;
  readonly underwriterFreeSection: boolean;
  readonly upgradeRate: boolean;
  readonly upgradeSectionID: number;
  readonly versionNumber: number;
  readonly zakayByAging: boolean;
  readonly zakayByQualification: boolean;
  readonly zakayByWaiting: boolean;
}
