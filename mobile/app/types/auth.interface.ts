import { IUser } from './user.interface'

export interface IAuthFormData
	extends Pick<
		IUser,
		'email' | 'password' | 'position' | 'name' | 'allSales'
	> {}
