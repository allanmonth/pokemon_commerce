import { Button , Paper } from "@material-ui/core";
import { useRouter } from "next/router";

//Components
import {Grid12, GridNumber} from "../../../common/grid";
import {TypographyCustom} from "../../../common/typography";
import { CartItem } from "./cartItem";
import { NotResult } from "../../../common/notResult";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowSize";
import { useNavigator } from "../../../../hooks/useNavigator";

//CSS
import {useCartCSS} from "../style/cart";

//I18N
import intl from "react-intl-universal";

//Redux
import { selectCart } from "../../../../redux/features/cart";
import { useAppSelector } from "../../../../redux/hooks";

//Utils
import { FormatterCurrency } from "../../../../utils/formatterCurrency";

//Interfaces
import { ItemsState } from "../../../../interfaces/cartState";

//Icons
import { ShoppingCartOutlined } from "@material-ui/icons";

//Constants
import { viewCartRouter } from "../../../../constants/router";

export function Cart(){
    const size = useWindowSize()
    const language = useNavigator()
    const classes = useCartCSS(size)
    const cart = useAppSelector(selectCart);
    const router = useRouter()

    return(
        <>
            <Paper className={classes.rootStart}>
                <Grid12 justifyContent={'center'}>
                    <TypographyCustom variant={'h1'}
                                      className={classes.title}>
                        {intl.get('cart')}
                    </TypographyCustom>
                </Grid12>
                {/*items*/}
                <Grid12 justifyContent={'center'}>
                {cart.items !== undefined ?
                    cart.items.length === 0 ?
                    <NotResult styleBool={true} icon={<ShoppingCartOutlined/>} title={'cartEmply'}/>
                :
                    cart.items.map((opt:ItemsState)=>(
                        <CartItem id={opt.id}
                                  key={opt.id}
                                  image={opt.image}
                                  name={opt.name}
                                  value={opt.value}
                                  quantity={opt.quantity}/>
                    )): null
                }
                </Grid12>
                {/*value total*/}
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
                            onClick={()=>{router.push(viewCartRouter)}}>
                        {intl.get('concluse')}
                    </Button>
                </Grid12>
            </Paper>
        </>
    )
}