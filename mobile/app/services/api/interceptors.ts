import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

export const API_URL = `${process.env.API_URL}`

export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

instance.interceptors.request.use(async config => {
	const accessToken = await getItemAsync('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

export default instance
