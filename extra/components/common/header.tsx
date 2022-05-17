import React , { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { useRouter } from "next/router";

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { ArrowBackIosOutlined , Language, ShoppingCart } from "@material-ui/icons";

//Redux
import { useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/features/cart";

//I18N
import intl from "react-intl-universal";

//CSS
import { useHeaderCSS } from "../../../styles/header";

//Components
import { TypographyCustom } from "./typography";
import { LanguageComponent } from './Language';

//Constants
import { viewCartRouter } from "../../constants/router";

//Interfaces
import { HeaderInterface } from "../../interfaces/header";

//PROPS
//back -> when you want the option with the back button
//handleFind -> function find pokemon

export function Header(props:HeaderInterface) {
    const classes = useHeaderCSS();
    const cart = useAppSelector(selectCart);
    const router = useRouter();
    const [name,setName] = useState('');

    return (
        <div className={classes.grow}>
            <AppBar position="fixed">
                <Toolbar>
                    {props.back ?
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                onClick={()=>{router.back()}}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <ArrowBackIosOutlined />
                            </IconButton>
                            <TypographyCustom className={classes.title}
                                              variant="h2"
                                              onClick={()=>{router.back()}}
                                              noWrap>
                                {intl.get('back')}
                            </TypographyCustom>
                        </>
                        :
                        <>
                            <TypographyCustom className={classes.title}
                                              variant="h1"
                                              noWrap>
                                Pokemon Store
                            </TypographyCustom>
                        </>
                    }
                    {props.handleFind !== undefined?
                    <>
                        <div className={classes.search}>
                            <InputBase
                                placeholder={intl.get('search')}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={(event)=>{
                                    setName(event.target.value)
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <SearchIcon style={{cursor:'pointer'}}
                                    onClick={()=>{props.handleFind !== undefined ?props.handleFind(name) : null}}/>
                    </>
                        : null
                    }
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton style={{cursor:'pointer'}}
                                    aria-label="show quantity"
                                    color="inherit"
                                    onClick={()=>{router.push(viewCartRouter)}}>
                            <Badge badgeContent={cart.quantity}
                                   color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <LanguageComponent setInit={props.setInit}/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
