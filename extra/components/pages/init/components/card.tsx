import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useTheme } from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";
import {createStyles , makeStyles} from "@material-ui/core/styles";

//Icons
const Breackfast = '/icons/icon_cafe_da_manha.png';
const Lunch = '/icons/icon_almoco.png';
const Dinner = '/icons/icon_janta.png';
const Snack = '/icons/icon_lanhe_tarde.png';

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";

//Components
import {GridNumber} from "../../../common/grid";
import {TypographyCustom} from "../../../common/typography";


//CSS
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: 130,
            height: 120,
            marginRight: 20,
            marginTop: 30,
        },
    }),
);

//PROPS
//click -> function on click in card
//image -> object image
//title -> object title
//subtitle -> object subtitle

export function PokeCard(props:any) {
    const size = useWindowSize();
    const classes = useStyles(size);
    const theme = useTheme();

    return (
        <Card className={classes.root}
              onClick={props.click}
              style={{cursor:'pointer'}}>
            <CardMedia
                style={{
                    width: '85%',
                    maxWidth: 115,
                    marginTop:-30,
                    paddingTop: 90,
                    position:'absolute',
                    marginLeft: 7,
                }}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <GridNumber justifyContent={'center'}
                            style={{paddingTop: 40}}
                            number={12}>
                    <TypographyCustom noWrap
                                      variant={'h4'}>
                        {props.title}
                    </TypographyCustom>
                </GridNumber>
                <GridNumber justifyContent={'center'}
                            style={{paddingTop: 10}}
                            number={12}>
                    {props.subtitle}
                </GridNumber>
            </CardContent>
        </Card>
    );
}
