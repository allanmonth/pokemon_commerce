import {Dispatch} from "react";
import {AppDispatch} from "../../redux/store";

//Service
import {api} from "../index";

//Utils
import {ErrorGeneric} from "../../utils/errorGeneric";

//Interfaces
import {ArrayItemsPokemonCard} from "../../interfaces/itemsPokemonCard";

export function getPokemon (
    init: number,
    limit: number,
    setItems: Dispatch<ArrayItemsPokemonCard>,
    change:number,
    setChange: Dispatch<number>,
    setCount:Dispatch<number>,
    dispatch: AppDispatch
){
    api.get("pokemon?offset=" + init + "&limit=" + limit)
        .then((res)=>{
            setItems(res.data.results)
            const pageTotal = (res.data.count / limit) >> 0
            setCount(pageTotal + 1)
            setChange(change + 1)
        })
        .catch((error)=>{
            dispatch(ErrorGeneric(String(error.response.status) + ' - ' + error.response.data))
        })
}