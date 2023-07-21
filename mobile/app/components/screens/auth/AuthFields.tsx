import cn from 'clsx'
import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IAuthFormData } from '@/types/auth.interface'

import { validEmail } from './email.rgx'

interface AuthFieldsProps {
	control: Control<IAuthFormData>
	isReg: boolean
}

const AuthFields: FC<AuthFieldsProps> = ({ control, isReg }) => {
	return (
		<>
			<Controller
				control={control}
				name='email'
				rules={{
					required: 'Поле почта обязательное',
					pattern: { value: validEmail, message: 'Не коректно!' }
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={cn(
								'rounded-full bg-[#272541] border pb-5 pt-3 px-4 my-2',
								!!error ? 'border-red-500' : 'border-transparent'
							)}
						>
							<TextInput
								placeholder='Почта'
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								autoCapitalize='none'
								className='text-white text-lg'
							/>
						</View>
						{error && <Text className='text-red-500'>{error.message}</Text>}
					</>
				)}
			/>

			<Controller
				control={control}
				name='password'
				rules={{
					required: 'Поле пароль обязательное',
					minLength: { message: 'Минимальная длина 6 символов', value: 6 }
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={cn(
								'rounded-full bg-[#272541] border pb-5 pt-3 px-4 my-2',
								!!error ? 'border-red-500' : 'border-transparent'
							)}
						>
							<TextInput
								placeholder='Пароль'
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								autoCapitalize='none'
								className='text-white text-lg'
								secureTextEntry
							/>
						</View>
						{error && <Text className='text-red-500'>{error.message}</Text>}
					</>
				)}
			/>

			{isReg && (
				<View>
					<Controller
						control={control}
						name='name'
						rules={{
							required: 'Имя должно быть указано'
						}}
						render={({
							field: { value, onChange, onBlur },
							fieldState: { error }
						}) => (
							<>
								<View
									className={cn(
										'rounded-full bg-[#272541] border pb-5 pt-3 px-4 my-2',
										!!error ? 'border-red-500' : 'border-transparent'
									)}
								>
									<TextInput
										placeholder='Имя'
										value={value}
										onChangeText={onChange}
										onBlur={onBlur}
										autoCapitalize='none'
										className='text-white text-lg'
									/>
								</View>
								{error && <Text className='text-red-500'>{error.message}</Text>}
							</>
						)}
					/>
					<Controller
						control={control}
						name='position'
						rules={{
							required: 'Поле должность обязательное'
						}}
						render={({
							field: { value, onChange, onBlur },
							fieldState: { error }
						}) => (
							<>
								<View
									className={cn(
										'rounded-full bg-[#272541] border pb-5 pt-3 px-4 my-2',
										!!error ? 'border-red-500' : 'border-transparent'
									)}
								>
									<TextInput
										placeholder='Должность'
										value={value}
										onChangeText={onChange}
										onBlur={onBlur}
										autoCapitalize='none'
										className='text-white text-lg'
									/>
								</View>
								{error && <Text className='text-red-500'>{error.message}</Text>}
							</>
						)}
					/>
				</View>
			)}
		</>
	)
}

export default AuthFields
