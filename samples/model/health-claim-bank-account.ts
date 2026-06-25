// Auto-generated from samples/model.json

import type { Address } from './address';
import type { ImageMasavData } from './image-masav-data';
import type { ScaledNumber } from './scaled-number';

export interface HealthClaimBankAccount {
  readonly accountHolderId: number;
  readonly accountNumber: number;
  readonly accountOwner: string;
  readonly accountOwnerFirstName: string;
  readonly accountOwnerLastName: string;
  readonly address: Address;
  readonly bank: number;
  readonly bankDescription: string;
  readonly branch: number;
  readonly className: 'il.co.migdal.ins.shared.model.HealthClaimBankAccount';
  readonly communicationOption: number;
  readonly createTime: number;
  readonly createUserID: string;
  readonly identityType: string;
  readonly imageMasavData: ImageMasavData;
  readonly minor: boolean;
  readonly mobileForSMS: string;
  readonly paymentAndInsuredDetailsNE: boolean;
  readonly paymentMethod: ScaledNumber;
  readonly personForPay: boolean;
  readonly receivingFactor: string;
  readonly receivingPostOfficeBox: string;
  readonly signedApplication: boolean;
  readonly updateTime: number;
  readonly updateUserID: string;
}
