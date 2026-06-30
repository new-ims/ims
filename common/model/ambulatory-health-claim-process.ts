// Auto-generated from samples/model.json

import type { AmbulatorySuperClaim } from './ambulatory-super-claim';
import type { HealthClaimBeneficiary } from './health-claim-beneficiary';
import type { HealthClaimPolicy } from './health-claim-policy';
import type { ClaimProcess } from './claim-base-process';

export interface AmbulatoryHealthClaimProcess extends ClaimProcess {
  readonly _id: string;
  readonly beneficiary: HealthClaimBeneficiary;
  readonly className: 'il.co.migdal.ins.ambulatory.model.AmbulatoryHealthClaimProcess';
  readonly isDummyProcess: boolean;
  readonly openingSource: string;
  readonly policies: readonly (HealthClaimPolicy)[];
  readonly processType: 'AMBULATORY_HEALTH_CLAIM';
  readonly superClaim: AmbulatorySuperClaim;
}
