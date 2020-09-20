import {
    SAVE_LAUNCH_DATA,
    SAVE_LAUNCH_ERROR,
    START_LOADER,
    STOP_LOADER
} from "../../action.type.constants";

export const initialState = {
    list: [],
    loading: false,
    error: null
};

export const specxReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SAVE_LAUNCH_DATA:
            return { ...state, list: [...payload.list] };
        case START_LOADER:
            return { ...state, loading: true };
        case STOP_LOADER:
            return { ...state, loading: false };
        case SAVE_LAUNCH_ERROR:
            return { ...state, error: payload.error };
        default: return state;
    }
};

export const getLaunchData = (state) => state ? state.list : initialState.list;
export const getLoadingState = (state) => state ? state.loading : initialState.loading;
export const getLoadingError = (state) => state ? state.error : initialState.error;