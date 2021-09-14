import { WithStyles } from "@material-ui/core/styles";
import React from "react";
import { dialogCSS } from "../../styles/dialog";

export interface DialogTitleProps extends WithStyles<typeof dialogCSS> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}