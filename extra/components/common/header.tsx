import React , { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingCart } from "@material-ui/icons";

//Redux
import { useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/features/cart";

//I18N
import intl from "react-intl-universal";

//CSS
import { useHeaderCSS } from "../../../styles/header";

//Components
import { TypographyCustom } from "./typography";
import { useRouter } from "next/router";
import { viewCartRouter } from "../../constants/router";

export function Header(props:any) {
    const classes = useHeaderCSS();
    const cart = useAppSelector(selectCart);
    const router = useRouter();
    const [name,setName] = useState('');

    return (
        <div className={classes.grow}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <TypographyCustom className={classes.title}
                                      variant="h1"
                                      noWrap>
                        Pokemon
                    </TypographyCustom>
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
                                onClick={()=>{props.handleFind(name)}}/>
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
                </Toolbar>
            </AppBar>
        </div>
    );
}
