import React from "react";
import {Typography} from "@material-ui/core";

export function TypographyCustom(props: any){
    return(
        <Typography style={props.style ?? {cursor:'default'}}
                    component={props.component ?? 'div'}
                    {...props}>
            {props.children}
        </Typography>
    )
}