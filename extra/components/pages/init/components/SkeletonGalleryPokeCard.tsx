import React from "react";

//Components
import {SkeletonPokeCard} from "./SkeletonPokeCard";

export function SkeletonGalleryPokeCard (){

    return(
        <>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
            <SkeletonPokeCard/>
        </>

    )
}