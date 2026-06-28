export interface LoginOutput {
   resultCode: number;
    resultDesc: string;
    messages: model.Message[];
    failed: boolean; 
  userId: string;
    userDisplayName: string;
    userRoleTitle: string;
    authToken: string;
    userRoles: { [key: string]: any };
    userProfile: UserProfile;
    processKey: string;
    processType: string;
    processTypeCode: number;
    loanType: string;
    insuredId: number;
    companyCode: number;
    userSerialNumber: number;
    sessionManagerData: { [key: string]: string };
    userAttributes: model.CodeValue[];
    wasUserSessionDeleted: boolean;
    wasActivatePerfomed: boolean;
}
