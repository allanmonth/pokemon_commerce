import {viewPokemonRouter} from "../../../../constants/router";
import {NextRouter} from "next/router";

export function clickView(value:string,router: NextRouter){
    const id = String(value).substring(value.lastIndexOf("/") + 1 )
    router.push(viewPokemonRouter + id)
}