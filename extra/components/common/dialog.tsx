import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import intl from "react-intl-universal";
import { useAppSelector } from "../../redux/hooks";
import { selectSnack } from "../../redux/features/snack";

//Redux
import { selectDialog, close } from "../../redux/features/dialog";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { initRouter } from "../../constants/router";
import { TypographyCustom } from "./typography";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

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
                    <TypographyCustom variant={'h1'}>
                        {intl.get(state.title)}
                    </TypographyCustom>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {intl.get(state.subtitle,state.variables)}
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}
