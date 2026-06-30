export interface ClaimProcess extends BaseProcess {
    referantUserId: number;
    referantUserName: string;
    referantSerialNum: number;
    dataChangedType: number;
    replacementProcessCode: number;
    superClaim: ISuperClaim;
    getPoliciesDataFlag: boolean;
    updateClaimsFlag: boolean;
    deleteOperativeClaims: boolean;
    claimDetailsUpdated: boolean;
    continuesData: IContinuesData;
    calculatedDateOverided: boolean;
    skipLetterValidation3: boolean;
    illnessStartDateChangedFlag: boolean;
    refreshDataAfterSuspend: boolean;
    documentPackageExtension: IDocumentPackageExtension;
    requestedDocumentExtension: IRequestedDocumentExtension[];
}
