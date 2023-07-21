import instance from '../api/interceptors'

import { IProductsResponse } from './products-service.interface'

export const ProductService = {
	async getAllProducts() {
		const responce = await instance.get<IProductsResponse[]>('/products')

		console.log(`res: ${responce}`);
		

		return responce.data
	},

	async addProduct(
		name: string,
		price: number,
		stockCount: number,
		salesCount: number
	) {
		const responce = await instance.post<IProductsResponse>('/products', {
			name,
			price,
			salesCount,
			stockCount
		})

		return responce.data
	}
}
