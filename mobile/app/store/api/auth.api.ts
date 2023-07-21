import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const url = process.env.API_URL

export const authApi = createApi({
	reducerPath: 'auth',
	tagTypes: ['auth'],
	baseQuery: fetchBaseQuery({ baseUrl: url }),
	endpoints: builder => ({
		registration: builder.query<void, void>({
			query: (body) => ({
				url: 'auth/registration',
				method: 'POST',
        body
			})
		}),
		login: builder.mutation<{ access_token: string; status: string }, void>({
			query: body => ({
				url: 'auth/login',
				method: 'POST',
				body
			}),
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
		})
	})
})

export const { } = authApi
