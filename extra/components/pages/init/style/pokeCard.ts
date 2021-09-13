import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useWindowsSizeInterface} from "../../../../interfaces/useWindowsSize";

export const usePokeCardCSS = makeStyles(() =>
    createStyles({
        root: {
            width: (size:useWindowsSizeInterface) => size.mobile? '100%' : '22%',
            minWidth: 280,
            marginRight: '2%',
            marginLeft: '2%',
            marginTop: 30,
            cursor: 'default'
        },
    }),
);