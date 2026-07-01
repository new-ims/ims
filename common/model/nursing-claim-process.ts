import type { ClaimProcess } from './claim-base-process';

export interface NursingClaimProcess extends ClaimProcess {
  readonly _id: string;
  readonly className: 'il.co.migdal.ins.nursing.model.NursingClaimProcess';
  readonly processType: 'NURSING_CLAIM';
//   readonly superClaim: AmbulatorySuperClaim;
}
