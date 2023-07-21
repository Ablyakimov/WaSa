import { combineReducers } from '@reduxjs/toolkit'

import { productApi } from './api/product.api'

export const rootReducer = combineReducers({
	// auth: authSlice.reducer,
	[productApi.reducerPath]: productApi.reducer
})
