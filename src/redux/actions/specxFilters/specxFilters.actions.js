import {
    RESET_FILTERS,
    SET_LAUNCH_YEAR,
    SET_SUCCESSFUL_LANDING,
    SET_SUCCESSFUL_LAUNCH
} from "../../action.type.constants";

export const setLaunchYear = (payload) => ({ type: SET_LAUNCH_YEAR, payload });
export const setSuccessfulLaunch = (payload) => ({ type: SET_SUCCESSFUL_LAUNCH, payload });
export const setSuccessfulLanding = (payload) => ({ type: SET_SUCCESSFUL_LANDING, payload });
export const resetAllFilters = () => ({ type: RESET_FILTERS });