import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

//Reducers
import SnackReducer from './features/snack';
import CartReducer from './features/cart';

export const store = configureStore({
    reducer: {
        snack: SnackReducer,
        cart: CartReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;