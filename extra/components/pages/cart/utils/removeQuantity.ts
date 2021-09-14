//Interfaces
import { AppDispatch } from "../../../../redux/store";
import { ItemsState } from "../../../../interfaces/cartState";

//Redux
import { removeQuantity } from "../../../../redux/features/cart";

export function clickRemoveQuantity(item:ItemsState,dispatch:AppDispatch){
    dispatch(removeQuantity({item}));
}