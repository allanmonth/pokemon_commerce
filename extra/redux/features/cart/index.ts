import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../../store";

//interfaces
import { CartActionState , CartState , ItemsState } from "../../../interfaces/cartState";

const initialState: CartState = {
    items: [],
    total: 0,
    parcel: 0,
    quantity: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state ,action: PayloadAction<CartActionState>) => {
            const array = state.items
            const sum = state.total + action.payload.item.value
            let emply = false
            array.map((opt:ItemsState,i:number)=>{
                if(opt.id === action.payload.item.id){
                    array[i].quantity = array[i].quantity + 1
                    emply = true
                }
                return null
            })
            if(!emply){
                array.push(action.payload.item)
            }
            state.quantity = state.quantity + 1;
            state.items = array;
            state.total = sum;
            state.parcel = (sum) / 100 >> 0 > 12 ? 12 : (sum) / 100 >> 0;
        },
        removeQuantity: (state ,action: PayloadAction<CartActionState>) => {
            const array = state.items
            const sum = state.total - action.payload.item.value
            let emply = false
            array.map((opt:ItemsState,i:number)=>{
                if(opt.id === action.payload.item.id){
                    array[i].quantity = array[i].quantity - 1
                    emply = true
                }
                return null
            })
            state.quantity = state.quantity - 1;
            state.items = array;
            state.total = sum;
            state.parcel = (sum) / 100 >> 0 > 12 ? 12 : (sum) / 100 >> 0;
        },
        removeItem: (state ,action: PayloadAction<CartActionState>) => {
            const array = state.items
            const sum = state.total - (action.payload.item.quantity * action.payload.item.value)
            array.map((opt:ItemsState,i:number)=>{
                if(opt.id === action.payload.item.id){
                    if(array.length > 0){
                        state.quantity = state.quantity - array[i].quantity;
                    }
                    else{
                        state.quantity = 0;
                    }
                    if(i === 0){
                        array.shift()
                    }
                    else{
                        array.splice(i,1)
                    }
                }
                return null
            })
            state.items = array;
            state.total = sum;
            state.parcel = (sum) / 100 >> 0 > 12 ? 12 : (sum) / 100 >> 0;
        },
        clear: (state ,action: PayloadAction) => {
            state.items = [];
            state.total = 0;
            state.parcel = 0;
            state.quantity = 0;
        },
    },
});

export const { addItem, removeItem, clear, removeQuantity } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;