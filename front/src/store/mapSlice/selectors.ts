import { createSelector } from 'reselect';
import {RootState} from '..';


export const getMapState = (state: RootState) => state.map;

export const getSelectedCoords = createSelector([getMapState] , (mapState)=> mapState.selectedCoords);

