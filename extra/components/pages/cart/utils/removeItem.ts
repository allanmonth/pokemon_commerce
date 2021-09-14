//Interfaces
import { AppDispatch } from "../../../../redux/store";
import { ItemsState } from "../../../../interfaces/cartState";

//Redux
import { removeItem } from "../../../../redux/features/cart";

export function clickRemove(item:ItemsState,dispatch:AppDispatch){
    dispatch(removeItem({item}));
}