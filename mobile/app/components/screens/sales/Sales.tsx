import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import Layout from '@/components/ui/layout/Layout'

import SalesItem from './SalesItem'

interface SalesProps {}

const Sales: FC<SalesProps> = () => {
	const [products] = useState([
		{
			id: '1',
			name: 'Смартфон Apple iPhone 11 64GB зеленый',
			price: '49 490',
			dateSell: '30.05.23',
			salesCount: 20
		},
		{
			id: '2',
			name: 'Смартфон Apple iPhone 12 64GB зеленый',
			price: '55 490',
			dateSell: '22.05.23',
			salesCount: 15
		},
		{
			id: '3',
			name: 'Смартфон Apple iPhone 10 64GB зеленый',
			price: '35 490',
			dateSell: '22.05.23',
			salesCount: 50
		},
		{
			id: '4',
			name: 'Смартфон Apple iPhone 13 64GB зеленый',
			price: '70 490',
			dateSell: '21.05.23',
			salesCount: 34
		}
	])

	return (
		<Layout title='Продажи'>
			{products.map(item => (
				<SalesItem
					name={item.name}
					price={item.price}
					dateSell={item.dateSell}
					salesCount={item.salesCount}
					key={`${item.name} ${item.id} ${item.price}`}
				/>
			))}
		</Layout>
	)
}

export default Sales
