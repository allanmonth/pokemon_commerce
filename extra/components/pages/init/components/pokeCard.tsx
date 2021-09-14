import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Image from "next/image";

//Icons
import { AddCircleRounded , OpenInBrowser } from "@material-ui/icons";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";
import { useNavigator } from "../../../../hooks/useNavigator";

//Components
import {Grid12} from "../../../common/grid";
import {TypographyCustom} from "../../../common/typography";
import {ActionCard} from "./actionCard";
import {SkeletonPokeCard} from "./SkeletonPokeCard";

//Services
import {useFetchPokemon} from "../../../../services/pokeAPI/useFetch";

//CSS
import {usePokeCardCSS} from "../style/pokeCard";

//Interfaces
import {pokeCardInterface} from "../../../../interfaces/pokeCard";

//Redux
import {useDispatch} from "react-redux";

//Utils
import { clickAdd } from "../utils/clickAdd";
import { FormatterCurrency } from "../../../../utils/formatterCurrency";

//PROPS
//click -> function on click in card
//id -> object id
//title -> object title
//subtitle -> object subtitle
//clickView -> click to page view details

export function PokeCard(props : pokeCardInterface) {
    const size = useWindowSize();
    const language = useNavigator();
    const classes = usePokeCardCSS(size);
    const dispatch = useDispatch()
    const id = String(props.id).substring(props.id.lastIndexOf("/") + 1 )
    const { data } = useFetchPokemon("pokemon/"+ id,dispatch,id !== undefined);

    return (
        !data?
            <SkeletonPokeCard/>
            :
            <Card className={classes.root}>
                <CardContent>
                    <Grid12 justifyContent={'center'}>
                        <Image alt={data.sprites.front_default}
                               src={data.sprites.front_default}
                               objectFit="contain"
                               width={'100%'}
                               height={'100%'}
                               quality={100}
                               priority />
                    </Grid12>
                    <Grid12 justifyContent={'center'}>
                        <TypographyCustom variant={props.title.length < 15 ?'h2' : 'h3'}
                                          style={{color:'white'}}>
                            {props.title[0].toUpperCase() + props.title.substr(1)}
                        </TypographyCustom>
                    </Grid12>
                    <Grid12 justifyContent={'center'} style={{marginBottom:20}}>
                        <TypographyCustom style={{color:'white'}}>
                            {String(FormatterCurrency(props.subtitle, language))}
                        </TypographyCustom>
                    </Grid12>
                    <Grid12 justifyContent={'center'} >
                        <ActionCard title={'view'}
                                    icon={<OpenInBrowser/>}
                                    click={props.clickView}
                                    variant={'outlined'}/>
                        <ActionCard title={ 'addCard' }
                                    icon={ <AddCircleRounded/> }
                                    click={()=>clickAdd({
                                        id: Number(id),
                                        image: data.sprites.front_default,
                                        name: props.title,
                                        value: props.subtitle,
                                        quantity: 1,
                                    },dispatch)}
                                    variant={ 'contained' }/>
                    </Grid12>
                </CardContent>
            </Card>
    );
}
