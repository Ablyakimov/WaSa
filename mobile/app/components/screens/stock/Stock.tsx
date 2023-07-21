import { FC, useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'

import Layout from '@/components/ui/layout/Layout'

import { useGetProductsQuery } from '@/store/api/product.api'

import StockItem from './StockItem'

interface StockProps {}

const Stock: FC<StockProps> = () => {
	const { data } = useGetProductsQuery()

	const [modalVisible, setModalVisible] = useState<boolean>(false)

	console.log(data)

	const [products] = useState([
		{
			id: '1',
			name: 'Смартфон Apple iPhone 11 64GB зеленый',
			price: '49 490',
			stockCount: 12,
			salesCount: 20
		},
		{
			id: '2',
			name: 'Смартфон Apple iPhone 12 64GB зеленый',
			price: '55 490',
			stockCount: 10,
			salesCount: 15
		},
		{
			id: '3',
			name: 'Смартфон Apple iPhone 10 64GB зеленый',
			price: '35 490',
			stockCount: 5,
			salesCount: 50
		},
		{
			id: '4',
			name: 'Смартфон Apple iPhone 13 64GB зеленый',
			price: '70 490',
			stockCount: 12,
			salesCount: 34
		},
		{
			id: '5',
			name: 'Смартфон Apple iPhone 13 64GB зеленый',
			price: '70 490',
			stockCount: 12,
			salesCount: 34
		},
		{
			id: '6',
			name: 'Смартфон Apple iPhone 13 64GB зеленый',
			price: '70 490',
			stockCount: 12,
			salesCount: 34
		}
	])

	const renderItem = (data: any) => {
		return (
			<StockItem
				name={data.item.name}
				price={data.item.price}
				stockCount={data.item.stockCount}
				salesCount={data.item.salesCount}
				key={`${data.item.name} ${data.item.id} ${data.item.price}`}
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		)
	}

	const renderHiddenItem = () => {
		return (
			<View className='flex justify-between flex-row'>
				<Pressable onPress={() => setModalVisible(true)}>
					<View className='flex bg-red-600 h-[100%] w-[200px] justify-center pl-8'>
						<Text className='text-left text-white font-medium text-xl'>
							Удалить?
						</Text>
					</View>
				</Pressable>
				<Pressable onPress={() => setModalVisible(true)}>
					<View className='flex bg-green-600 h-[100%] w-[200px] justify-center pr-8'>
						<Text className='text-right text-white font-medium text-xl'>
							Купить?
						</Text>
					</View>
				</Pressable>
			</View>
		)
	}

	return (
		<Layout title='Склад'>
			<SwipeListView
				data={data}
				renderItem={renderItem}
				renderHiddenItem={renderHiddenItem}
				leftOpenValue={150}
				rightOpenValue={-150}
				previewOpenValue={0}
				previewOpenDelay={1}
				closeOnScroll={true}
				closeOnRowOpen={true}
			/>
		</Layout>
	)
}

export default Stock
