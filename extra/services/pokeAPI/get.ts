import {api} from "../index";

export function getPokemon (init: number,limit: number,setItems: any,change:number,setChange: any,setCount:any){
    api.get("pokemon?offset=" + init + "&limit=" + limit)
        .then((res)=>{
            console.log(res.data.results.length)
            setItems(res.data.results)
            const pageTotal = (res.data.count / limit) >> 0
            setCount(pageTotal + 1)
            setChange(change + 1)
        })
        .catch((error)=>{
            console.log(error)
        })
}