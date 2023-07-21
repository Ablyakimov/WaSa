import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuItem from './MenuItem'
import { menuData } from './menu.data'
import { TypeNav } from './menu.interface'

interface BottomMenuProps {
	nav: TypeNav
	currentRoute?: string
}

const BottomMenu: FC<BottomMenuProps> = ({ currentRoute, nav }) => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className='pt-5 px-3 flex-row justify-around items-center w-full bg-[#1E1C2E]'
			style={{
				paddingBottom: bottom + 10
			}}
		>
			{menuData.map(item => (
				<MenuItem
					nav={nav}
					item={item}
					currentRoute={currentRoute}
					key={item.path}
				/>
			))}
		</View>
	)
}

export default BottomMenu
