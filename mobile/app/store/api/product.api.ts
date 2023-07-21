import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IProductsResponse } from '@/services/products/products-service.interface'

const url = process.env.API_URL

export const productApi = createApi({
	reducerPath: 'products',
	tagTypes: [''],
	baseQuery: fetchBaseQuery({ baseUrl: url }),
	endpoints: builder => ({
		getProducts: builder.query<IProductsResponse[], void>({
			query: () => ({
				url: '/products',
				method: 'GET'
			})
		}),
		addProduct: builder.mutation({
			query: body => ({
				url: '/products',
				method: 'POST',
				body
			})
		})
	})
})

export const { useGetProductsQuery } = productApi
