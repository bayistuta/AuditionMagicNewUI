import { combineReducers } from '@reduxjs/toolkit'

import resumeReducer from '../features/talent/resume/resumeSlice'

const rootReducer = combineReducers({
  resume: resumeReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer