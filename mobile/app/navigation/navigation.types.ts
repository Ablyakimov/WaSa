import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Stock: undefined
	Sales: undefined
	Profile: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
