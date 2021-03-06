import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useWindowsSizeInterface} from "../../../../interfaces/useWindowsSize";

export const useResumeCSS = makeStyles(() =>
    createStyles({
        root: {
            width: (size:useWindowsSizeInterface) => size.mobile? '100%' : size.width/12 * 3.3,
            maxHeight: window.innerHeight/12 * 10,
            position:(size:useWindowsSizeInterface) => size.mobile? 'relative' : 'fixed',
            right: (size:useWindowsSizeInterface) => size.mobile? 0 : 20,
            marginTop:(size:useWindowsSizeInterface) => size.mobile? 10 : 80,
            overflowY: 'auto',
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