// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { Address } from './address';
import type { CodeValue } from './code-value';
import type { Gender } from './gender';
import type { ScaledNumber } from './scaled-number';

export interface ContactPerson {
  readonly address: Address;
  readonly birthDate?: ISODateTimeString;
  readonly boxNumber?: number;
  readonly className: 'il.co.migdal.ins.entities.person.ContactPerson';
  readonly companyCode?: number;
  readonly deliveryFlag: boolean;
  readonly district?: CodeValue;
  readonly email: string;
  readonly firstName: string;
  readonly gender?: Gender;
  readonly getDataFromL2KFlag: boolean;
  readonly id: number;
  readonly identity: number;
  readonly identityType?: string;
  readonly lastName: string;
  readonly preferredContactMeans: readonly (number)[];
  readonly type: CodeValue;
  readonly updateDate: ISODateTimeString;
  readonly updateL2KFlag: boolean;
  readonly updatingUser: ScaledNumber;
  readonly verifyContactDetailsFlag: boolean;
}
