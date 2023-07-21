import { deleteItemAsync, setItemAsync } from 'expo-secure-store'

export const saveTokenToStorage = async (accesToken: string) => {
	await setItemAsync('accesToken', accesToken)
}

export const removeTokenFromStorage = async () => {
	await deleteItemAsync('accesToken')
}
