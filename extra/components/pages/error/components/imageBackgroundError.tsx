import React from 'react';
import Image from "next/image";

//Image
import Icon from '../../../../../public/brand/pokemonLogo.png'

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";

//Interface
import {ContainerInterface} from "../../../../interfaces/container";

export function ImageBackgroundError({children}:ContainerInterface){
    const size = useWindowSize()
    return(
        <div style={{
            height: size.height ,
        }}>
            <div style={{
                height: size.height /8 ,
                width: size.width / 5,
                position: 'absolute',
                marginLeft: size.width / 50,
            }}>
                <Image alt="BackgroundImage"
                       src={Icon}
                       layout="fill"
                       objectFit="contain"
                       quality={100}
                       priority />
            </div>
            <div style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
            }}>
                {children}
            </div>
        </div>
    )
}