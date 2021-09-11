import {GridSize} from "@material-ui/core";
import React from "react";

export interface GridInterfaceNumber {
    number?: GridSize,
    children: React.ReactNode,
}

export interface GridInterface {
    children: React.ReactNode,
}