import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Keyboard, Pressable, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'

import Button from '@/components/ui/layout/Button'
import Loader from '@/components/ui/layout/Loader'

// import { useActions } from '@/hooks/useActions'
// import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/types/auth.interface'

import AuthFields from './AuthFields'

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
	const [isReg, setIsReg] = useState(false)
	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	// const { login, register } = useActions()
	// // const { isLoading } = useAuth()

	// const onSubmit: SubmitHandler<IAuthFormData> = data => {
	// 	console.log(1)

	// 	if (isReg) register(data)
	// 	else login(data)
	// }

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='items-center justify-center flex-1'>
				<View className='w-3/4'>
					<Text className='text-white text-4xl text-center font-bold mb-7'>
						{isReg ? 'Регистрация' : 'Вход'}
					</Text>

					{false ? (
						<Loader />
					) : (
						<>
							<AuthFields control={control} isReg={isReg} />
							{/* <Button onPress={handleSubmit(onSubmit)}>Войти</Button> */}

							<Pressable
								onPress={() => setIsReg(!isReg)}
								className='w-30 self-end'
							>
								<Text className='text-white text-opacity-60 text-base mt-3 text-right'>
									{!isReg ? 'Регистрация' : 'Вход'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Auth
