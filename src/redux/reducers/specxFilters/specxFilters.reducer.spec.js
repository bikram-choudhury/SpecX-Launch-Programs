import {
    resetAllFilters,
    setLaunchYear,
    setSuccessfulLanding,
    setSuccessfulLaunch
} from "../../actions/specxFilters/specxFilters.actions";
import {
    initialState,
    specxFilterReducer,
    getLaunchYear,
    getSuccessfulLaunch,
    getSuccessfulLanding
} from "./specxFilters.reducer";

describe('Test specx filter reducers', () => {
    it('should set launch year', () => {
        const action = setLaunchYear(2006);
        const state = specxFilterReducer(initialState, action);
        expect(state).toEqual({
            launchYear: 2006,
            successfulLaunch: null,
            successfulLanding: null
        });
    });
    it('should set successful launch', () => {
        const action = setSuccessfulLaunch('true');
        const state = specxFilterReducer(initialState, action);
        expect(state).toEqual({
            launchYear: null,
            successfulLaunch: 'true',
            successfulLanding: null
        });
    });
    it('should set successful landing', () => {
        const action = setSuccessfulLanding('false');
        const state = specxFilterReducer(initialState, action);
        expect(state).toEqual({
            launchYear: null,
            successfulLaunch: null,
            successfulLanding: 'false'
        });
    });
    it('should reset to initial state', () => {
        const action = resetAllFilters();
        const state = specxFilterReducer({
            launchYear: 2006,
            successfulLaunch: 'true',
            successfulLanding: 'false'
        }, action);
        expect(state).toEqual(initialState);
    });
    it('should send same state for invalid type', () => {
        const action = { type: 'NO_ACTION_TYPE' };
        const state = specxFilterReducer({
            launchYear: 2006,
            successfulLaunch: 'true',
            successfulLanding: 'false'
        }, action);
        expect(state).toEqual({
            launchYear: 2006,
            successfulLaunch: 'true',
            successfulLanding: 'false'
        });
    });

    it('should get launch year with empty state', () => {
        const launchYear = getLaunchYear(null);
        expect(launchYear).toEqual(initialState.launchYear);
    });
    it('should get launch year with modified state', () => {
        const launchYear = getLaunchYear({
            ...initialState,
            launchYear: 2006
        });
        expect(launchYear).toEqual(2006);
    });
    it('should get succssful launch status with empty state', () => {
        const launchYear = getSuccessfulLaunch(null);
        expect(launchYear).toEqual(initialState.successfulLaunch);
    });
    it('should get succssful launch status with modified state', () => {
        const status = getSuccessfulLaunch({
            ...initialState,
            successfulLaunch: 'true'
        });
        expect(status).toEqual('true');
    });
    it('should get succssful landing status with empty state', () => {
        const launchYear = getSuccessfulLanding(null);
        expect(launchYear).toEqual(initialState.successfulLanding);
    });
    it('should get succssful landing status with modified state', () => {
        const status = getSuccessfulLanding({
            ...initialState,
            successfulLanding: 'true'
        });
        expect(status).toEqual('true');
    });

});
