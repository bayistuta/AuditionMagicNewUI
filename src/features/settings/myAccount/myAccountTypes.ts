export enum Gender {
    Male,
    Female,
    NonBinary
}

export enum AgeRange {
    Adult,
    Minor
}

export enum ContactType {
    Email,
    Call,
    SMS,
}

export interface MyAccountState {
    firstName: string,
    lastName: string,
    gender: Gender,
    dob: Date,
    email: string,
    countryCode: string,
    contactNumber: string,
    primaryTalentTypecode: string,
    ageRange: AgeRange,
    ageFrom: number,
    ageTo: number,
    preferContactMethod: ContactType,
    canBeContactedByAgent: boolean,
    currentPassword: string,
    newPassword: string,
    confirmPassword: string,
    enableMultiFactorAuth: boolean
}