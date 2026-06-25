// Auto-generated from samples/model.json

import type { CodeValue } from './code-value';

export interface ReferantDecision {
  readonly approvalReason: CodeValue;
  readonly className: 'il.co.migdal.ins.entities.claim.ReferantDecision';
  readonly decisionReason: CodeValue;
  readonly disabilityClaimFinishedFlag: boolean;
  readonly foreclosureDepRequestSentFlag: boolean;
  readonly isIncreasedDisabilityPercentFlag: boolean;
}
