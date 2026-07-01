import type { CodeValue } from './code-value';
import type { Company } from './model.types';

export  interface BaseOperativeClaim {
  "@class": string;
    company: Company;
    claimNum: number;
    claimType: CodeValue;
    claimStatus: CodeValue;
    overdueClaimCode: number;
    insuredId: number;
    // policies: IClaimPolicy[];
    showCancelFlag: boolean;
    claimGroupNum: number;
    // claimLines: IClaimLine[];
    actionCode: string;
    insuredProfessionsAtEventDate: CodeValue[]
}
