export  interface BaseOperativeClaim {
  "@class": string;
    company: Company;
    claimNum: number;
    claimType: CodeValue;
    claimStatus: CodeValue;
    overdueClaimCode: number;
    insuredId: number;
    policies: IClaimPolicy[];
    showCancelFlag: boolean;
    claimGroupNum: number;
    paymentTemplates: IPaymentTemplate[];
    irregularClaimMarks: IIrregularClaimMark[];
    claimLines: IClaimLine[];
    actionCode: string;
    insuredProfessionsAtEventDate: CodeValue[]
}
