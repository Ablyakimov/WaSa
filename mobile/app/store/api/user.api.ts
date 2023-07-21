import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IUser } from '@/types/user.interface'

const url = process.env.API_URL

export const userApi = createApi({
	reducerPath: 'user',
	tagTypes: ['user'],
	baseQuery: fetchBaseQuery({ baseUrl: url }),
	endpoints: builder => ({
		getMe: builder.query<IUser, void>({
			query() {
				return {
					url: 'users/me',
					credentials: 'include'
				}
			},
			transformResponse: (result: { data: { user: IUser } }) =>
				result.data.user,
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setUser(data))
				} catch (error) {}
			}
		})
	})
})

export const {} = userApi
