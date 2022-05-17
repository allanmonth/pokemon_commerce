import { unstable_createMuiStrictModeTheme as createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import {useMedia} from "../extra/hooks/useMedia";

export default function Theme() {
    let isDark = useMedia("(prefers-color-scheme: dark)");
    const palletType = isDark ? "dark" : "light";

    const theme = createMuiTheme({
        palette: {
            primary: {
                light : '#ff8080',
                main : '#ff3636',
                dark : '#0e0000',
            },
            secondary: {
                light : '#ffffff',
                main : '#fffafa',
                dark : '#f2f2f2',
            },
            success: {
                light : '#7EA96B',
                main : '#7EA96B',
                dark : '#7EA96B',
            },
            warning: {
                light : '#FD904E',
                main : '#FD904E',
                dark : '#FD904E',
            },
            type: palletType,
        },
        typography: {
            fontFamily: [
                'Montserrat',
            ].join(','),
            h1:{
                fontSize: 30,
                fontWeight: 600,
            },
            h2:{
                fontSize: 26,
                fontWeight: 600,
            },
            h3:{
                fontSize: 16,
                fontWeight: 600,
            },
            h6:{
                fontSize: 300,
                fontWeight: 600,
            },
            subtitle1:{
                fontSize: 14,
                color: '#b8b8b8',
            },
            subtitle2:{
                fontSize: 12,
            },
            body1:{
                fontSize: 20,
                fontWeight: 600,
            },
        },
        shape: {
            borderRadius: 20,
        },
        overrides:{
            MuiCssBaseline: {
                '@global': {
                    '*::-webkit-scrollbar': {
                      width: '0rem'
                    },
                    '*::-webkit-scrollbar-track': {
                      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
                    },
                    '*::-webkit-scrollbar-thumb': {
                      backgroundColor: 'rgba(0,0,0,.1)',
                      outline: '1px solid slategrey'
                    }
                  }
            }
        }
    });
    return responsiveFontSizes(theme)
}


