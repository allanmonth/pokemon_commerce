import React from "react";
import { Grid12, Grid9 } from "../../../common/grid";

//Components
import {SkeletonPokeCard} from "./SkeletonPokeCard";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";

export function SkeletonGalleryPokeCard (){
    const size = useWindowSize();

    return(
        <Grid12 style={{marginTop: size.mobile? '3rem' : '2rem',display: 'flex',justifyContent: 'center'}}>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
        </Grid12>

    )
}