import { Model } from "@common";

export interface ProcessDetailsVm {
    readonly insuredDisplayName: string;
    readonly insuredId: string;
    readonly insuredGender: string;
    readonly insuredBirthDate: string;
}

export const GENDER_NAME_MAP: Record<Model.Gender['value'], string> = {
    'Female': 'נקבה',
    'Male': 'זכר'
}

export function processToDetailsVm(process: Model.Process | null): ProcessDetailsVm {
    const insured = process?.insured;
    if (!insured) {
        return {
            insuredDisplayName: '',
            insuredId: '',
            insuredGender: '',
            insuredBirthDate: '',
        };
    }

    const displayName = `${insured.firstName} ${insured.lastName}`;
    const gender = GENDER_NAME_MAP[insured.gender.value];
    const birthDate = insured.birthDate;
    const id = insured.identity.toString();

    return {
        insuredDisplayName: displayName,
        insuredId: id,
        insuredGender: gender,
        insuredBirthDate: birthDate,
    };
}
