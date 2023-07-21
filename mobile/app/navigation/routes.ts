import Profile from '@/components/screens/profile/Profile'
import Sales from '@/components/screens/sales/Sales'
import Stock from '@/components/screens/stock/Stock'

import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Sales',
		component: Sales
	},
	{
		name: 'Stock',
		component: Stock
	}
]
