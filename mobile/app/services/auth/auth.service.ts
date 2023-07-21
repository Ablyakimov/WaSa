import instance from '../api/interceptors'

import { IAuthResponse } from './auth-service.interface'
import { removeTokenFromStorage, saveTokenToStorage } from './auth.helper'

export const AuthService = {
	async login(email: string, password: string) {
		const responce = await instance.post<IAuthResponse>('/auth/login', {
			email,
			password
		})

		if (responce.data.accessToken)
			await saveTokenToStorage(responce.data.accessToken)

		return responce.data
	},
	async register(
		email: string,
		password: string,
		position: string,
		name: string
	) {
		const responce = await instance.post<IAuthResponse>('/auth/registration', {
			email,
			password,
			position,
			name
		})

		if (responce.data.accessToken)
			await saveTokenToStorage(responce.data.accessToken)

		return responce.data
	},
	async logout() {
		await removeTokenFromStorage()
	}
}
