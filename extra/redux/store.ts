import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ShoppingCardReducer from './features/shoppingCart';
import SnackReducer from './features/snack';

export const store = configureStore({
    reducer: {
        shoppingCard: ShoppingCardReducer,
        snack: SnackReducer
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