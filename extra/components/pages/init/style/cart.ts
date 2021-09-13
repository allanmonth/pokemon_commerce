import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useWindowsSizeInterface} from "../../../../interfaces/useWindowsSize";

export const useCartCSS = makeStyles(() =>
    createStyles({
        rootStart: {
            width: (size:useWindowsSizeInterface) => size.width/12 * 3.3,
            maxHeight: window.innerHeight/12 * 10,
            position:'fixed',
            right:20,
            marginTop: 80,
            overflowY: 'auto',
            borderBottomRightRadius:0,
            borderBottomLeftRadius:0
        },
        rootEnd: {
            width: (size:useWindowsSizeInterface) => size.width/12 * 3.3,
            height: 140,
            position:'fixed',
            right:20,
            bottom: 30,
            overflowY: 'auto',
            borderTopLeftRadius:0,
            borderTopRightRadius:0
        },
        root: {
            width: (size:useWindowsSizeInterface) => size.width/12 * 3.3,
            height: window.innerHeight - 330,
            position:'fixed',
            right:20,
            marginTop: 150,
            overflowY: 'auto',
            borderRadius:0
        },
        title: {
            marginTop: 30,
            marginBottom: 10
        },
        button: {
            color : "white" ,
            marginBottom:20,
            marginTop:20,
            width: '95%'
        },
    }),
);