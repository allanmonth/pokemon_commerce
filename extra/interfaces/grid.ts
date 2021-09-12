import {GridJustification, GridSize} from "@material-ui/core";
import React, {CSSProperties} from "react";

export interface GridInterfaceNumber {
    number ?: GridSize,
    children ?: React.ReactNode,
    justifyContent ?: GridJustification,
    style ?: CSSProperties
}

export interface GridInterface {
    children ?: React.ReactNode,
    justifyContent ?: GridJustification,
    style ?: CSSProperties
}