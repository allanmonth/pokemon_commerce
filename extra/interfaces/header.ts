import React from "react";

export interface HeaderInterface {
    back ?: boolean,
    setInit: any
    // @ts-ignore
    handleFind ?: React.EventHandler<string>
}