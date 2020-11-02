import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Gender, AgeRange, ContactType, MyAccountState} from './myAccountTypes'

let initialState: MyAccountState = {
    firstName: 'Leon',
    lastName: 'Yang',
    gender: Gender.Male,
    dob: new Date('1982-04-01'),
    email: 'li@at2.com.au',
    countryCode: 'AU',
    contactNumber: '+8613730667417',
    primaryTalentTypecode: 'ARTS',
    ageRange: AgeRange.Adult,
    ageFrom: 40,
    ageTo: 50,
    preferContactMethod: ContactType.Email,
    canBeContactedByAgent: true,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    enableMultiFactorAuth: true,
}



const myAccountSlice = createSlice({
    name: 'myAccount',
    initialState,
    reducers: {
        changeText(state: MyAccountState, action: PayloadAction<string>) {
            
        }
    }
})

export const {
} = myAccountSlice.actions

export default myAccountSlice.reducer
