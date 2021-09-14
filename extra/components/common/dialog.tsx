import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

//Icons
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

//I18N
import intl from "react-intl-universal";

//Redux
import { selectDialog, close } from "../../redux/features/dialog";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";

//Components
import { DialogTitleProps } from "../../interfaces/dialogTitle";
import { TypographyCustom } from "./typography";

//CSS
import { dialogCSS, DialogContent } from "../../../styles/dialog";

const DialogTitle = withStyles(dialogCSS)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h1">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

//PROPS
//title -> title dialog
//subtitle -> resume dialog

export default function CustomizedDialogs() {
    const state = useAppSelector(selectDialog);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(close())
    };

    return (
        <div>
            <Dialog onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={state.open}>
                <DialogTitle id="customized-dialog-title"
                             onClose={handleClose}>
                        {intl.get(state.title)}
                </DialogTitle>
                <DialogContent dividers>
                    <TypographyCustom variant={'body1'}>
                        {intl.get(state.subtitle,state.variables)}
                    </TypographyCustom>
                </DialogContent>
            </Dialog>
        </div>
    );
}
