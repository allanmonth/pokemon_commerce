import React from "react";

export interface ActionPokeCardInterface {
    title: string,
    icon: React.ReactElement,
    click : React.MouseEventHandler,
    variant: "text" | "outlined" | "contained" | undefined
}