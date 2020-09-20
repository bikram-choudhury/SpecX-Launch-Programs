import {
    saveLaunchData,
    startLoader,
    stopLoader,
    setLaunchError
} from "../../actions/specx/specx.action";
import {
    initialState,
    specxReducer,
    getLaunchData,
    getLoadingState,
    getLoadingError
} from "./specx.reducer";

describe('Test specx reducers', () => {
    it('should set launch data', () => {
        const action = saveLaunchData(['test']);
        const state = specxReducer(initialState, action);
        expect(state).toEqual({
            list: ['test'], loading: false, error: null
        });
    });
    it('should start loader', () => {
        const action = startLoader();
        const state = specxReducer(initialState, action);
        expect(state).toEqual({
            list: [], loading: true, error: null
        });
    });
    it('should stop loader', () => {
        const action = stopLoader();
        const state = specxReducer({
            ...initialState,
            loading: true
        }, action);
        expect(state).toEqual({
            list: [], loading: false, error: null
        });
    });
    it('should save launch error', () => {
        const action = setLaunchError("Network Error");
        const state = specxReducer(initialState, action);
        expect(state).toEqual({
            list: [], loading: false, error: "Network Error"
        });
    });
    it('should send same state for invalid type', () => {
        const action = { type: 'NO_ACTION_TYPE' };
        const state = specxReducer({
            list: ['test'], loading: false, error: ''
        }, action);
        expect(state).toEqual({
            list: ['test'], loading: false, error: ''
        });
    });

    it('should get launch data with empty state', () => {
        const launchData = getLaunchData(null);
        expect(launchData).toEqual(initialState.list);
    });
    it('should get launch data with modified state', () => {
        const launchData = getLaunchData({
            ...initialState,
            list: ['2006', '2007']
        });
        expect(launchData).toEqual(['2006', '2007']);
    });
    it('should get loading status with empty state', () => {
        const loadingStatus = getLoadingState(null);
        expect(loadingStatus).toEqual(initialState.loading);
    });
    it('should get loading status with modified state', () => {
        const loadingStatus = getLoadingState({
            ...initialState,
            loading: true
        });
        expect(loadingStatus).toEqual(true);
    });
    it('should get loading error with empty state', () => {
        const loadingError = getLoadingError(null);
        expect(loadingError).toEqual(initialState.error);
    });
    it('should get loading error with modified state', () => {
        const loadingError = getLoadingError({
            ...initialState,
            error: "Bad Request"
        });
        expect(loadingError).toEqual("Bad Request");
    });
});
