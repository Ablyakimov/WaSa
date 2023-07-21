import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

import { AppConstants } from '@/app.constants'

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
	return <ActivityIndicator color={AppConstants.primary} size={'large'} />
}

export default Loader
