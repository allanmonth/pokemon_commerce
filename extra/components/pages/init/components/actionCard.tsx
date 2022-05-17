import React from "react";
import {Button} from "@material-ui/core";

//Components
import {GridNumber} from "../../../common/grid";

//I18N
import intl from "react-intl-universal";

//Interface
import {ActionPokeCardInterface} from "../../../../interfaces/actionPokeCardInterface";

//CSS
import {useActionPokeCardCSS} from "../style/actionPokeCard";

//PROPS
//title -> object title key I18N
//icon -> object icon
//click -> event on click mouse
//variant -> style button

export function ActionCard(props: ActionPokeCardInterface){
    const classes = useActionPokeCardCSS()

    return(
        <GridNumber number={12}
                    justifyContent={'center'}>
            <Button hidden
                    fullWidth
                    variant={props.variant ?? "contained"}
                    color={props.color ?? 'primary'}
                    className={classes.button}
                    startIcon={props.icon}
                    onClick={props.click}>
                {intl.get(props.title)}
            </Button>
        </GridNumber>
    )
}