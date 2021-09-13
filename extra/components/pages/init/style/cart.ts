import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useWindowsSizeInterface} from "../../../../interfaces/useWindowsSize";

export const useCartCSS = makeStyles(() =>
    createStyles({
        root: {
            width: (size:useWindowsSizeInterface) => size.width/12 * 3.5,
            position:'fixed',
            right:20,
            marginTop: 30
        },
        title: {
            marginTop: 30,
            marginBottom: 30
        },
    }),
);