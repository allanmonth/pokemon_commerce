import React from "react";

//Components
import {GridNumber} from "../../../common/grid";
import {TypographyCustom} from "../../../common/typography";

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

export function ActionCard(props: ActionPokeCardInterface){
    const classes = useActionPokeCardCSS()

    return(
        <GridNumber number={12}
                    justifyContent={'center'}>
            <TypographyCustom variant={'subtitle1'}
                              onClick={props.click}
                              className={classes.icon}>
                {props.icon}
            </TypographyCustom>
            <TypographyCustom variant={'subtitle1'}
                              onClick={props.click}
                              className={classes.title}>
                {intl.get(props.title)}
            </TypographyCustom>
        </GridNumber>
    )
}