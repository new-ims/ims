// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { Agent } from './agent';
import type { CodeValue } from './code-value';
import type { HealthClaimCoverage } from './health-claim-coverage';
import type { HealthClaimParagraph } from './health-claim-paragraph';
import type { ScaledNumber } from './scaled-number';

export interface HealthClaimPolicy {
  readonly agent: Agent;
  readonly bprAgreenment: number;
  readonly cancelPolicyFlag: boolean;
  readonly claimOpeningCode: number;
  readonly className: 'il.co.migdal.ins.shared.model.HealthClaimPolicy';
  readonly collectiveID: number;
  readonly collectiveType: number;
  readonly company: string;
  readonly continuity: boolean;
  readonly coverages: readonly (HealthClaimCoverage)[];
  readonly currentFund: number;
  readonly factoryId: number;
  readonly familyHeadIdentityCard: number;
  readonly form: CodeValue;
  readonly fundId: number;
  readonly inProcess: boolean;
  readonly insuranceEndDate: ISODateTimeString;
  readonly insuranceStartDate: ISODateTimeString;
  readonly investmentType: number;
  readonly kupatGemelNiud: boolean;
  readonly kycCheck: boolean;
  readonly minMonthlyPromise: number;
  readonly msTzuratTashlum: ScaledNumber;
  readonly orderId: number;
  readonly organization: number;
  readonly paragraphs?: readonly (HealthClaimParagraph)[];
  readonly paymentType: number;
  readonly pensionFund: number;
  readonly pensionInvestmentCode: number;
  readonly pensionPlan: number;
  readonly pensionType: number;
  readonly policyClassification: string;
  readonly policyDebt: boolean;
  readonly policyId: number;
  readonly recommended: boolean;
  readonly requestAmount: ScaledNumber;
  readonly retirementType: number;
  readonly statusDescription: string;
  readonly transferFund: number;
  readonly versionPolicyBuiltFlag: boolean;
}
