import { FC, useState } from 'react'
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

interface SalesItemProps {
	price: string
	dateSell: string
	name: string
	salesCount: number
}

const SalesItem: FC<SalesItemProps> = ({
	price,
	dateSell,
	name,
	salesCount
}) => {
	return (
		<>
			<View>
				<View className='bg-[#233421] px-4 py-5'>
					<Text className='text-white text-lg font-bold'>{name}</Text>
					<Text className='text-white text-lg font-bold'>Цена: {price}</Text>
					<View className='flex flex-row justify-between'>
						<Text className='text-white text-sm'>
							Дата продажи: : {dateSell}
						</Text>
						<Text className='text-white text-sm'>
							Кол-во проданных: {salesCount}
						</Text>
					</View>
				</View>
			</View>
		</>
	)
}

export default SalesItem
