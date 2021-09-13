import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Image from "next/image";

//Icons
import { AddCircleRounded , OpenInBrowser } from "@material-ui/icons";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";

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

//PROPS
//click -> function on click in card
//id -> object id
//title -> object title
//subtitle -> object subtitle
//clickView -> click to page view details
//clickAdd -> click to add in shopping card

export function PokeCard(props : pokeCardInterface) {
    const size = useWindowSize();
    const classes = usePokeCardCSS(size);
    const { data } = useFetchPokemon("pokemon/"+ String(props.id).substring(props.id.lastIndexOf("/") + 1 ));

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
                        <TypographyCustom variant={'h2'}
                                          style={{color:'white'}}>
                            {props.title[0].toUpperCase() + props.title.substr(1)}
                        </TypographyCustom>
                    </Grid12>
                    <Grid12 justifyContent={'center'} style={{marginBottom:20}}>
                        <TypographyCustom style={{color:'white'}}>
                            {props.subtitle}
                        </TypographyCustom>
                    </Grid12>
                    <Grid12 justifyContent={'center'} >
                        <ActionCard title={'view'} icon={<OpenInBrowser/>} click={props.clickView}/>
                        <ActionCard title={'addCard'} icon={<AddCircleRounded/>} click={props.clickAdd}/>
                    </Grid12>
                </CardContent>
            </Card>
    );
}
