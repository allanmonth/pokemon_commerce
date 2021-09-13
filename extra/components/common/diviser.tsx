import {useTheme} from "@material-ui/core";

//Components
import {Grid12} from "./grid";

export function Diviser(){
    const theme = useTheme()
    return(
        <Grid12 justifyContent={'center'}>
            <div style={{backgroundColor:theme.palette.text.primary,width: '90%',height:0.5}}/>
        </Grid12>
    )
}