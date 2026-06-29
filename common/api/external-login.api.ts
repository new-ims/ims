import { Model } from "../model";
import { OutputBase } from "./bases";
import { UserProfile } from "./user-profile";

export interface ExternalLoginInput {
    sessionManagerId: string,
}

export interface ExternalLoginOutput extends OutputBase {
  userId: string;
    userDisplayName: string;
    userRoleTitle: string;
    authToken: string;
    userRoles: { [key: string]: any };
    userProfile: UserProfile;
    processKey: string;
    processType: Model.ProcessType;
    processTypeCode: number;
    loanType: string;
    insuredId: number
    isHistorical: boolean;
    companyCode: number;
    userSerialNumber: number;
    sessionManagerData: { [key: string]: string };
    userAttributes: Model.CodeValue[];
    wasUserSessionDeleted: boolean;
    wasActivatePerfomed: boolean;
}

