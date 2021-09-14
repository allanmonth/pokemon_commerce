import { WithStyles } from "@material-ui/core/styles";
import React from "react";
import { styles } from "../../styles/dialog";

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}