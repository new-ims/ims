import { Model } from "../model";
import { UserProfile } from "./user-profile";

export interface ExternalLoginInput {
    userName: string,
    password: string,
    companyCode: number,
    sessionManagerId: string,
    roleCode: number
}

export interface ExternalLoginOutput {
   resultCode: number;
    resultDesc: string;
    messages: Model.Message[];
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
    userAttributes: Model.CodeValue[];
    wasUserSessionDeleted: boolean;
    wasActivatePerfomed: boolean;
}

