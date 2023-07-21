import { rootReducer } from './root-reducer'
import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './api/product.api';


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(productApi.middleware)
});

// export type TypeRootState = ReturnType<typeof rootReducer>
 