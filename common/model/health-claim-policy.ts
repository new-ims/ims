// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { CodeValue } from './code-value';
import type { HealthClaimCoverage } from './health-claim-coverage';
import type { HealthClaimParagraph } from './health-claim-paragraph';
import type {BasePolicy} from "./base-policy";

export interface HealthClaimPolicy extends BasePolicy {
  readonly bprAgreenment: number;
  readonly cancelPolicyFlag: boolean;
  readonly className: 'il.co.migdal.ins.shared.model.HealthClaimPolicy';
  readonly collectiveID: number;
  readonly collectiveType: number;
  readonly continuity: boolean;
  readonly coverages: readonly (HealthClaimCoverage)[];
  readonly familyHeadIdentityCard: number;
  readonly form: CodeValue;
  readonly insuranceEndDate: ISODateTimeString;
  readonly kupatGemelNiud: boolean;
  readonly organization: number;
  readonly paragraphs?: readonly (HealthClaimParagraph)[];
  readonly policyClassification: string;
  readonly policyDebt: boolean;
  readonly recommended: boolean;
  readonly versionPolicyBuiltFlag: boolean;
}
