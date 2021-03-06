import { Button , Paper } from "@material-ui/core";
import { useRouter } from "next/router";

//Components
import {Grid12, GridNumber} from "../../../common/grid";
import {TypographyCustom} from "../../../common/typography";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";
import { useNavigator } from "../../../../hooks/useNavigator";

//CSS
import {useResumeCSS} from "../style/resume";

//I18N
import intl from "react-intl-universal";

//Redux
import { selectCart } from "../../../../redux/features/cart";
import { useAppSelector } from "../../../../redux/hooks";

//Utils
import { FormatterCurrency } from "../../../../utils/formatterCurrency";

//Constants
import { Diviser } from "../../../common/diviser";
import { clickFinish } from "../utils/finish";
import { useDispatch } from "react-redux";

export function Resume(){
    const size = useWindowSize()
    const language = useNavigator()
    const classes = useResumeCSS(size)
    const cart = useAppSelector(selectCart)
    const router = useRouter()
    const dispatch = useDispatch()

    return(
        <>
            <Paper className={classes.root}>
                {/*title*/}
                <Grid12 justifyContent={'center'}>
                    <TypographyCustom variant={'h1'}
                                      className={classes.title}>
                        {intl.get('resume')}
                    </TypographyCustom>
                </Grid12>
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
                            {FormatterCurrency( cart.total, language )}
                        </TypographyCustom>
                    </GridNumber>
                    {cart.parcel > 0 ?
                        <Grid12 justifyContent={'flex-end'}
                                style={{paddingRight:20}}>
                            <TypographyCustom variant={'subtitle1'}>
                                {intl.get('parcel',{value: cart.parcel})}
                            </TypographyCustom>
                        </Grid12>
                        : null
                    }
                </Grid12>
                {/*actions*/}
                <Grid12 justifyContent={'center'}>
                    <Button hidden
                            fullWidth
                            variant={"contained"}
                            color={'primary'}
                            className={classes.button}
                            onClick={()=>{clickFinish(dispatch,router,cart.total,language)}}>
                        {intl.get('concluse')}
                    </Button>
                </Grid12>
            </Paper>
        </>
    )
}