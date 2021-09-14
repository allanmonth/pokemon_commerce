import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useWindowsSizeInterface} from "../../../../interfaces/useWindowsSize";

export const useItemCSS = makeStyles((theme) =>
    createStyles({
        root: {
            width: (size:useWindowsSizeInterface) => size.width/12 * 3.3,
            position:'fixed',
            right:20,
            marginTop: 30
        },
        menuButton: {
            cursor: 'pointer'
        },
        title: {
            marginTop:(size:useWindowsSizeInterface) => size.mobile? 5 : 30,
            marginLeft:5,
            marginBottom: (size:useWindowsSizeInterface) => size.mobile? 5 : 30
        },
        button: {
            color : "white" ,
            marginBottom:20,
            marginTop:20,
            width: '95%'
        },
        icon: {
            marginTop:(size:useWindowsSizeInterface) => size.mobile? 5 : 30,
            cursor: 'pointer',
            marginBottom: 10
        },
        quantity: {
            marginLeft : 10,
            marginTop: (size:useWindowsSizeInterface) => size.mobile? 5 : 30,
            marginRight: 10
        }
    }),
);