// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { Address } from './address';
import type { CodeValue } from './code-value';
import type { FATCAInfo } from './fatca-info';
import type { Gender } from './gender';

export interface Insured {
  readonly address: Address;
  readonly birthDate: ISODateTimeString;
  readonly calculatedBirthDate: ISODateTimeString;
  readonly className: 'il.co.migdal.ins.entities.person.insured.Insured';
  readonly company: string;
  readonly companyEmployer: boolean;
  readonly digitalConnectionAgreement: number;
  readonly electronicMailingCode: boolean;
  readonly email: string;
  readonly familyStatus: string;
  readonly fatcaInfo: FATCAInfo;
  readonly firstName: string;
  readonly gender: Gender;
  readonly identity: number;
  readonly identityType: string;
  readonly isGovBirthDateMissing: boolean;
  readonly joseCitizen: number;
  readonly lastJobCode: number;
  readonly lastJobDescription: string;
  readonly lastName: string;
  readonly missing: boolean;
  readonly position: CodeValue;
  readonly sendingMarketingEmail: number;
  readonly sendingMarketingMail: number;
  readonly seniorCitizen: boolean;
  readonly smokingCode: number;
  readonly smokingCodeString: string;
  readonly statusCode: number;
}
