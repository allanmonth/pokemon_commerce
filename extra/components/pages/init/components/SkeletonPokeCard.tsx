import React from "react";
import {Skeleton} from "@material-ui/lab";

//CSS
import {useSkeletonPokeCardCSS} from "../style/skeletonPokeCard";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";


export function SkeletonPokeCard (){
    const size = useWindowSize();
    const classes = useSkeletonPokeCardCSS(size);

    return(
        <>
            <Skeleton className={classes.root}/>
        </>

    )
}