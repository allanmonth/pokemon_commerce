import {Button, Divider, Paper} from "@material-ui/core";

//Components
import {Grid11, Grid12, GridNumber} from "../../../common/grid";
import {TypographyCustom} from "../../../common/typography";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";

//CSS
import {useCartCSS} from "../style/cart";

//I18N
import intl from "react-intl-universal";
import {Diviser} from "../../../common/diviser";

//PROPS
//

export function Cart(){
    const size = useWindowSize()
    const classes = useCartCSS(size)

    //Quantity parcel
    const parcel = 10

    return(
        <Paper className={classes.root}>
            <Grid12 justifyContent={'center'}>
                <TypographyCustom variant={'h1'}
                                  className={classes.title}>
                    {intl.get('cart')}
                </TypographyCustom>
            </Grid12>
            {/*items*/}

            {/*value total*/}
            <Diviser/>
            <Grid12 justifyContent={'center'}
                    style={{marginTop:10}}>
                <GridNumber number={6}
                            style={{paddingLeft:20}}>
                    <TypographyCustom variant={'h1'}>
                        {intl.get('total')}
                    </TypographyCustom>
                </GridNumber>
                <GridNumber number={6}
                            justifyContent={'flex-end'}
                            style={{paddingRight:20}}
                directions={'column'}>
                    <TypographyCustom variant={'h1'}>
                        R$ 100,00
                    </TypographyCustom>
                </GridNumber>
                <Grid12 justifyContent={'flex-end'}
                        style={{paddingRight:20}}>
                    <TypographyCustom variant={'subtitle1'}>
                        {intl.get('parcel',{value: parcel})}
                    </TypographyCustom>
                </Grid12>
            </Grid12>
            {/*actions*/}
            <Grid12 justifyContent={'center'}>
                <Button hidden
                        fullWidth
                        variant={"contained"}
                        color={'primary'}
                        className={classes.button}
                        onClick={()=>{}}>
                    {intl.get('concluse')}
                </Button>
            </Grid12>
        </Paper>
    )
}