import React from "react";
import Image from "next/image";

//Components
import {Grid12 , Grid2 , Grid4 } from "../../../common/grid";
import {TypographyCustom} from "../../../common/typography";
import {Diviser} from "../../../common/diviser";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";
import { useNavigator } from "../../../../hooks/useNavigator";

//CSS
import { useCartItemCSS } from "../style/cartItem";

//Utils
import { FormatterCurrency } from "../../../../utils/formatterCurrency";

//Interfaces
import { ItemsState } from "../../../../interfaces/cartState";

export function CartItem(props:ItemsState){
    const size = useWindowSize()
    const classes = useCartItemCSS(size)
    const language = useNavigator();

    return(
        <Grid12 justifyContent={'center'}>
            <Grid2 justifyContent={'center'}>
                <Image alt={props.image}
                       src={props.image}
                       objectFit="contain"
                       width={'100%'}
                       height={'80%'}
                       quality={100}
                       priority />
            </Grid2>
            <Grid4>
                <TypographyCustom variant={'body1'}
                                  className={classes.title}>
                    {props.quantity} x {props.name}
                </TypographyCustom>
            </Grid4>
            <Grid4 justifyContent={'flex-end'}>
                <TypographyCustom variant={'body1'}
                                  className={classes.title}>
                    {String(FormatterCurrency(props.value, language))}
                </TypographyCustom>
            </Grid4>
            <Diviser/>
        </Grid12>
    )
}