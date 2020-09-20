import {
    RESET_FILTERS,
    SET_LAUNCH_YEAR,
    SET_SUCCESSFUL_LANDING,
    SET_SUCCESSFUL_LAUNCH
} from "../../action.type.constants";

export const initialState = {
    launchYear: null,
    successfulLaunch: null,
    successfulLanding: null
};

export const specxFilterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LAUNCH_YEAR:
            return { ...state, launchYear: payload };
        case SET_SUCCESSFUL_LAUNCH:
            return { ...state, successfulLaunch: payload };
        case SET_SUCCESSFUL_LANDING:
            return { ...state, successfulLanding: payload };
        case RESET_FILTERS:
            return { ...initialState };
        default: return state;
    }
};

export const getLaunchYear = (state) => state ? state.launchYear : initialState.launchYear;
export const getSuccessfulLaunch = (state) => state ?
    state.successfulLaunch : initialState.successfulLaunch;
export const getSuccessfulLanding = (state) => state ?
    state.successfulLanding : initialState.successfulLanding;