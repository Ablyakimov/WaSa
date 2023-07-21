import { createSlice } from '@reduxjs/toolkit'

import type { IProductInitialState } from '../../types/product.interface'
import { addProduct, getAllProducts } from './products.actions'

const initialState: IProductInitialState = {
	isLoading: false,
	products: []
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllProducts.pending, state => {
				state.isLoading = true
			})
			.addCase(getAllProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.products = payload
			})
			.addCase(getAllProducts.rejected, state => {
				state.isLoading = false
				state.products = []
			})
			.addCase(addProduct.pending, state => {
				state.isLoading = true
			})
			.addCase(addProduct.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.products = [...state.products, payload]
			})
			.addCase(addProduct.rejected, state => {
				state.isLoading = false
				state.products = []
			})
	}
})
