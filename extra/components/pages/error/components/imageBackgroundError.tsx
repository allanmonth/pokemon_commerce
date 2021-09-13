import React from 'react';
import Image from "next/image";

//Image
import Icon from '../../../../../public/brand/pokemonLogo.png'

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";

//Interface
import {ContainerInterface} from "../../../../interfaces/container";

//CSS
import {useImageBackgroundErrorCSS} from "../style/imageBackgroundError";

export function ImageBackgroundError({children}:ContainerInterface){
    const size = useWindowSize()
    const classes = useImageBackgroundErrorCSS(size);

    return(
        <div className={classes.root}>
            <div className={classes.absolute}>
                <Image alt="BackgroundImage"
                       src={Icon}
                       layout="fill"
                       objectFit="contain"
                       quality={100}
                       priority />
            </div>
            <div className={classes.children}>
                {children}
            </div>
        </div>
    )
}