import React from "react";
import Image from "next/image";

//Components
import { Grid1 , Grid12 , Grid2 , Grid5 } from "../../../common/grid";
import {TypographyCustom} from "../../../common/typography";
import {Diviser} from "../../../common/diviser";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";
import { useNavigator } from "../../../../hooks/useNavigator";

//CSS
import { useItemCSS } from "../style/item";

//Utils
import { FormatterCurrency } from "../../../../utils/formatterCurrency";

//Interfaces
import { ItemsState } from "../../../../interfaces/cartState";

//Icons
import { AddCircleRounded , Cancel , RemoveCircleRounded } from "@material-ui/icons";

//Redux
import { useDispatch } from "react-redux";

//Utils
import { clickRemove } from "../utils/removeItem";
import { clickAdd } from "../../init/utils/clickAdd";
import { clickRemoveQuantity } from "../utils/removeQuantity";

export function Item(props:ItemsState){
    const size = useWindowSize()
    const classes = useItemCSS(size)
    const language = useNavigator();
    const dispatch = useDispatch()

    return(
        <Grid12 justifyContent={'center'}>
            <Grid2 justifyContent={'center'}>
                <Image alt={props.image}
                       src={props.image}
                       objectFit="contain"
                       width={'100%'}
                       height={'50%'}
                       quality={100}
                       priority />
            </Grid2>
            <Grid5>
                <TypographyCustom variant={'h2'}
                                  className={classes.title}>
                    {props.name}
                </TypographyCustom>
            </Grid5>
            <Grid1 justifyContent={'center'}>
                <AddCircleRounded className={classes.icon}
                                  onClick={()=>{
                                      clickAdd({...props},dispatch)
                                  }}/>
                <TypographyCustom variant={'body1'}
                                  className={classes.quantity}>
                    {props.quantity}
                </TypographyCustom>
                <RemoveCircleRounded className={classes.icon}
                                     color={props.quantity === 1 ?'disabled' : 'inherit'}
                                     onClick={()=>{
                                         if(props.quantity > 1){
                                             clickRemoveQuantity({...props},dispatch)
                                         }
                                     }}/>
            </Grid1>
            <Grid2 justifyContent={'flex-end'}>
                <TypographyCustom variant={'body1'}
                                  className={classes.title}>
                    {String(FormatterCurrency(props.value, language))}
                </TypographyCustom>
            </Grid2>
            <Grid1 justifyContent={'center'}>
                <Cancel className={classes.icon}
                        onClick={()=>{
                            clickRemove({...props},dispatch)
                        }}/>
            </Grid1>
            <Diviser/>
        </Grid12>
    )
}