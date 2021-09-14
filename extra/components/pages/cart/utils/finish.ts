import { NextRouter } from "next/router";

//Redux
import { AppDispatch } from "../../../../redux/store";
import { clear } from "../../../../redux/features/cart";
import { open } from "../../../../redux/features/dialog";

//Constants
import { initRouter } from "../../../../constants/router";

//Utils
import { FormatterCurrency } from "../../../../utils/formatterCurrency";

export function clickFinish(dispatch:AppDispatch,router:NextRouter,total:number,language:string){
    dispatch(clear());
    dispatch(open({
        title: 'buyFinish',
        subtitle: 'buyFinishText',
        variables: {value: Math.floor((Math.random() * 100) + 1),money: FormatterCurrency( total * 0.03, language )},
        open: true
    }))
    router.push(initRouter)
}