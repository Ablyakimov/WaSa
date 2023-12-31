import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'

import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'

// import { useAuth } from '@/hooks/useAuth'

import PrivateNavigation from './PrivateNavigation'

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
	// const { user } = useAuth()

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		)

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigation />
			</NavigationContainer>
			<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
		</>
	)
}

export default Navigation
