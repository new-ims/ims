import { BasePolicy } from './base-policy';
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
    policies: BasePolicy[];
    showCancelFlag: boolean;
    claimGroupNum: number;
    actionCode: string;
    insuredProfessionsAtEventDate: CodeValue[]
}
