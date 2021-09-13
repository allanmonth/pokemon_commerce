import React from "react";

export interface pokeCardInterface{
    id : string,
    title : string,
    subtitle : string,
    clickView : React.MouseEventHandler,
    clickAdd : React.MouseEventHandler,
}