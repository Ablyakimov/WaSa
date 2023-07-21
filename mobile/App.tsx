import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'


import Navigation from '@/navigation/Navigation'
import { store } from '@/store/store'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
					<SafeAreaProvider>
						<Navigation />
					</SafeAreaProvider>
			</Provider>
			<StatusBar style='light' />
		</QueryClientProvider>
	)
}
