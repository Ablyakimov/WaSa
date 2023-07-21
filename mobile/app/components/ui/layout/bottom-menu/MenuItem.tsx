import { AntDesign } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text } from 'react-native'

import { IMenuItem, TypeNav } from './menu.interface'
import { AppConstants } from '@/app.constants'

interface MenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

const MenuItem: FC<MenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path
	return (
		<Pressable className='w-[32%] items-center' onPress={() => nav(item.path)}>
			<AntDesign
				name={item.iconName}
				size={26}
				color={isActive ? AppConstants.primary : AppConstants.grey}
			/>
		</Pressable>
	)
}

export default MenuItem
