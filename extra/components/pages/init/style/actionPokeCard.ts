import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useWindowsSizeInterface} from "../../../../interfaces/useWindowsSize";

export const useActionPokeCardCSS = makeStyles(() =>
    createStyles({
        icon: {
            color:'white',
            cursor:'pointer'
        },
        title: {
            color: 'white',
            marginTop: 1,
            marginLeft: 10,
            cursor:'pointer'
        },
        button: {
            color : "white" ,
            marginBottom:5,
            marginTop:5,
            width: '95%'
        },
    }),
);