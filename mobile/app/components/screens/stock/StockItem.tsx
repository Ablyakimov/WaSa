import { FC } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'

interface StockItemProps {
	price: string
	stockCount: number
	name: string
	salesCount: number
	modalVisible: boolean
	setModalVisible: (state: boolean) => void
}

const StockItem: FC<StockItemProps> = ({
	price,
	stockCount,
	name,
	salesCount,
	modalVisible,
	setModalVisible
}) => {
	return (
		<>
			<View className='bg-[#252134] px-4 py-6'>
				<Text className='text-white text-lg font-bold'>{name}</Text>
				<Text className='text-white text-lg font-bold'>Цена: {price}</Text>
				<View className='flex flex-row justify-between'>
					<Text className='text-white text-sm'>
						Кол-во на складе: : {stockCount}
					</Text>
					<Text className='text-white text-sm'>
						Кол-во проданных: {salesCount}
					</Text>
				</View>
			</View>
			<View className='flex-1 justify-center items-center'>
				<Modal
					animationType='slide'
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(false)
					}}
				>
					<View className='flex-1 justify-center items-center mt-10'>
						<View className='m-10 bg-slate-800 rounded-lg p-[50px] items-center shadow-black'>
							<Text className='text-2xl mb-4 text-center text-white'>
								{name}
							</Text>
							<Pressable
								onPress={() => setModalVisible(!modalVisible)}
								className='mb-2 rounded-sm p-5'
							>
								<Text className='text-white font-bold text-center'>Да</Text>
							</Pressable>
							<Pressable
								className='rounded-sm p-5'
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text className='text-white font-bold text-center'>Нет</Text>
							</Pressable>
						</View>
					</View>
				</Modal>
			</View>
		</>
	)
}

export default StockItem
