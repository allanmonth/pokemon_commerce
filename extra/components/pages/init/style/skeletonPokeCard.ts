import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useWindowsSizeInterface} from "../../../../interfaces/useWindowsSize";

export const useSkeletonPokeCardCSS = makeStyles(() =>
    createStyles({
        root: {
            width: (size:useWindowsSizeInterface) => size.mobile? '100%' : '22%',
            minWidth: 300,
            height: (size:useWindowsSizeInterface) => size.mobile? 230 : '2.5%',
            minHeight: 350,
            marginRight: '2%',
            marginLeft: '2%',
            marginTop: (size:useWindowsSizeInterface) => size.mobile? '-28%' : '-8%',
        },
    }),
);