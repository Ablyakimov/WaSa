export interface IProduct {
	name: string
	price: number
	stockCount: number
	salesCount: number
}

export interface IProductResponce {
	id: string
	name: string
	price: number
	stockCount: number
	salesCount: number
}

export interface IProductInitialState {
	isLoading: boolean
	products: Array<IProductResponce>
}
