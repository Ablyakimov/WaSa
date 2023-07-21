import * as authAction from './auth/auth.actions'
import * as productAction from './products/products.actions'

export const rootAction = {
	...authAction,
	...productAction
}
