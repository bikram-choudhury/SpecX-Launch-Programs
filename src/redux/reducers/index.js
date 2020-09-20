import { combineReducers } from 'redux';
import * as specx from './specx/specx.reducer';
import * as specxFilters from './specxFilters/specxFilters.reducer';

const rootReducer = combineReducers({
    specx: specx.specxReducer,
    specxFilters: specxFilters.specxFilterReducer
});

export const reducers = (state, action) => rootReducer(state, action);

export const getSpecxProgramLaunchData = (state) => specx.getLaunchData(state.specx);
export const getSpecxProgramLoadingStatus = (state) => specx.getLoadingState(state.specx);
export const getSpecxProgramLoadingError = (state) => specx.getLoadingError(state.specx);
