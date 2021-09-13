import { Grid12 , Grid3 , Grid9 } from "../../extra/components/common/grid";
import React from "react";
import { Cart } from "../../extra/components/pages/init/components/cart";
import { useWindowSize } from "../../extra/hooks/useWindowSize";
import { Resume } from "../../extra/components/pages/cart/components/resume";
import { Header } from "../../extra/components/common/header";

export default function ViewCart(){
    const size = useWindowSize()

    return(
        <Grid12>
            <Grid12>
                <Header back={true}/>
            </Grid12>
            <Grid9 justifyContent={'center'}
                   style={{padding:20,paddingTop:70}}>
            </Grid9>
            {!size.mobile?
                <Grid3 style={{padding:20}}>
                    <Resume/>
                </Grid3>
                : null
            }
        </Grid12>
    )
}