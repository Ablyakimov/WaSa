import { FC } from 'react'
import { Text, View } from 'react-native'

import Button from '@/components/ui/layout/Button'
import Layout from '@/components/ui/layout/Layout'

// import { useActions } from '@/hooks/useActions'
// import { useAuth } from '@/hooks/useAuth'

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
	// const { logout } = useActions()
	
	return (
		<Layout title='Профиль'>
			<Text className='text-xl font-semibold text-white'>
				Имя: Вася Пупкин
			</Text>
			<Text className='text-xl font-semibold text-white pt-3'>
				Должность: Продавец-консультант
			</Text>

			<Text className='text-xl font-semibold text-white pt-3'>
				Сумма всех продаж: 197 960 руб.
			</Text>

			<Button className='mt-20' onPress={() => console.log()}>
				Выйти
			</Button>
		</Layout>
	)
}

export default Profile
