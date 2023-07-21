import { createAsyncThunk } from '@reduxjs/toolkit'

import { ProductService } from '@/services/products/products.service'

import { IProduct, IProductResponce } from '../../types/product.interface'

export const addProduct = createAsyncThunk<IProductResponce, IProduct>(
	'product/add',
	async ({ name, price, salesCount, stockCount }, thunkAPI) => {
		try {
			return await ProductService.addProduct(
				name,
				price,
				salesCount,
				stockCount
			)
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const getAllProducts = createAsyncThunk<IProductResponce[]>(
	'product/get',
	async (_, thunkAPI) => { 
		try {
			return await ProductService.getAllProducts()
			
		} catch (error) {
			
			return thunkAPI.rejectWithValue(error)
		}
	}
)
