import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../../store";

//Interfaces
import { dialogState } from "../../../interfaces/dialogState";

const initialState: dialogState = {
    title: 'view',
    subtitle: 'resume',
    variables: {},
    open: false
};

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        open: (state ,action: PayloadAction<dialogState>) => {
            state.title = action.payload.title;
            state.subtitle = action.payload.subtitle;
            state.variables = action.payload.variables;
            state.open = true;
        },
        close: (state ,action: PayloadAction) => {
            state.title = 'view';
            state.subtitle = 'resume';
            state.variables = {};
            state.open = false;
        },
    },
});

export const { open, close } = dialogSlice.actions;

export const selectDialog = (state: RootState) => state.dialog;

export default dialogSlice.reducer;