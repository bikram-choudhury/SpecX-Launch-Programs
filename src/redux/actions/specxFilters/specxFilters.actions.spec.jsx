import {
    RESET_FILTERS,
    SET_LAUNCH_YEAR,
    SET_SUCCESSFUL_LANDING,
    SET_SUCCESSFUL_LAUNCH
} from "../../action.type.constants";
import {
    resetAllFilters,
    setLaunchYear,
    setSuccessfulLanding,
    setSuccessfulLaunch
} from './specxFilters.actions';

describe('Test specx filter actions', () => {
    it('setLaunchYear', () => {
        const expectedAction = { type: SET_LAUNCH_YEAR, payload: 2006 };
        const action = setLaunchYear(2006);
        expect(action).toEqual(expectedAction);
    });
    it('setSuccessfulLaunch', () => {
        const expectedAction = { type: SET_SUCCESSFUL_LAUNCH, payload: 'true' };
        const action = setSuccessfulLaunch('true');
        expect(action).toEqual(expectedAction);
    });
    it('setSuccessfulLanding', () => {
        const expectedAction = { type: SET_SUCCESSFUL_LANDING, payload: 'true' };
        const action = setSuccessfulLanding('true');
        expect(action).toEqual(expectedAction);
    });
    it('resetAllFilters', () => {
        const expectedAction = { type: RESET_FILTERS };
        const action = resetAllFilters();
        expect(action).toEqual(expectedAction);
    });
});
