import {Paper} from "@material-ui/core";
import {Grid12} from "../../../common/grid";
import {TypographyCustom} from "../../../common/typography";

export function Cart(){
    return(
        <Paper style={{width:'100%'}}>
            <Grid12>
                <TypographyCustom>
                    Resumo do carrinho
                </TypographyCustom>
            </Grid12>
        </Paper>
    )
}