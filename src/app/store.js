import { configureStore } from "@reduxjs/toolkit";

// import { ThunkAction } from 'redux-thunk';
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer
})

// export const AppDispatch = typeof store.dispatch

// export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store