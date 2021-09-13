//Interfaces
import { AppDispatch } from "../../../../redux/store";
import { ItemsState } from "../../../../interfaces/cartState";

//Redux
import { addItem } from "../../../../redux/features/cart";

export function clickAdd(item:ItemsState,dispatch:AppDispatch){
    dispatch(addItem({item}));
}