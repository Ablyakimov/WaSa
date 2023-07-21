import { createAsyncThunk } from '@reduxjs/toolkit'

import { IAuthResponse } from '@/services/auth/auth-service.interface'
import { AuthService } from '@/services/auth/auth.service'

import { IAuthFormData } from '@/types/auth.interface'

export const register = createAsyncThunk<IAuthResponse, IAuthFormData>(
	'auth/register',
	async ({ password, email, position, name }, thunkAPI) => {
		try {

			return await AuthService.register(email, password, position, name)
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IAuthFormData>(
	'auth/login',
	async ({ password, email }, thunkAPI) => {
		try {
			return await AuthService.login(email, password)
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
	return {}
})
