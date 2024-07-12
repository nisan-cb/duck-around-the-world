import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import initialState from "./initialState";


const mapSlice = createSlice({
    name: 'Map',
    initialState,
    reducers: {
        setSelectedCoords(state, action: PayloadAction<null | [number, number]>) {
            state.selectedCoords = action.payload;
        },
    },
})

export const actions = mapSlice.actions;
export const reducer = mapSlice.reducer;

export default {actions, reducer};
