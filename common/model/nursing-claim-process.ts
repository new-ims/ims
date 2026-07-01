import type { ClaimProcess } from './claim-base-process';
import type { BaseSuperClaim } from './base-super-claim';

export interface NursingClaimProcess extends ClaimProcess {
  readonly _id: string;
  readonly className: 'il.co.migdal.ins.nursing.model.NursingClaimProcess';
  readonly processType: 'NURSING_CLAIM';
  readonly superClaim: BaseSuperClaim;
}
