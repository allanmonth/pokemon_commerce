import {Dispatch} from "react";
import {AppDispatch} from "../../redux/store";

//Service
import {api} from "../index";

//Utils
import {ErrorGeneric} from "../../utils/errorGeneric";

//Interfaces
import {ArrayItemsPokemonCard} from "../../interfaces/itemsPokemonCard";
import { arrayBuffer } from "stream/consumers";
import { NextRouter } from "next/router";
import { viewPokemonRouter } from "../../constants/router";

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

export function getPokemonName (
    router: NextRouter,
    name:string,
    dispatch: AppDispatch
){
    api.get("pokemon/"+ name + '/')
        .then((res)=>{
            router.push(viewPokemonRouter + res.data.id)
        })
        .catch((error)=>{
            dispatch(ErrorGeneric(String(error.response.status) + ' - ' + error.response.data))
        })
}