export interface UserProfile {
    operatorCode: number;
    roleSerialNum: number;
    roleCode: number;
    companyCode: number;
    districtNum: number;
    teamNum: number;
    agentType: number;
    agentNum: number;
    insuredFactoryNum: number;
    operatorRoleTitle: string;
    swSync: string;
    requestId: number;
    companyLevel: number;
    operatorName: string;
    // printersInfo: model.IPrinterInfo[];
    // userRoleList: model.IUserRole[];
    operatorUserName: string;
}
