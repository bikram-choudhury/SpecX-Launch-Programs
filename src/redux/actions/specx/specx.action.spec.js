/* eslint-disable camelcase */
import { flushPromises } from './../../../../jest.helper';
import * as api from "../../../services/api.service";
import {
    SAVE_LAUNCH_DATA,
    START_LOADER,
    STOP_LOADER,
    SAVE_LAUNCH_ERROR
} from "../../action.type.constants";
import {
    saveLaunchData,
    startLoader,
    stopLoader,
    setLaunchError,
    getSpecxLaunchInfo, formatSpecxLaunchData
} from './specx.action';

describe('Test specx actions', () => {
    it('saveLaunchData', () => {
        const expectedAction = {
            type: SAVE_LAUNCH_DATA, payload: { list: [] }
        };
        const action = saveLaunchData([]);
        expect(action).toEqual(expectedAction);
    });
    it('startLoader', () => {
        const expectedAction = { type: START_LOADER };
        const action = startLoader();
        expect(action).toEqual(expectedAction);
    });
    it('stopLoader', () => {
        const expectedAction = { type: STOP_LOADER };
        const action = stopLoader();
        expect(action).toEqual(expectedAction);
    });
    it('setLaunchError', () => {
        const expectedAction = {
            type: SAVE_LAUNCH_ERROR, payload: { error: "Network error" }
        };
        const action = setLaunchError("Network error");
        expect(action).toEqual(expectedAction);
    });
    it('getSpecxLaunchInfo with valid success response', async () => {
        const filter = {};
        const dispatchSpy = jest.fn();

        jest.spyOn(api, 'fetchLaunchData').mockImplementation(() => {
            return Promise.resolve({ data: [] })
        });
        const thunkDispatch = getSpecxLaunchInfo(filter);
        thunkDispatch(dispatchSpy);

        await flushPromises();

        expect(dispatchSpy).toHaveBeenCalledTimes(3);
    });
    it('getSpecxLaunchInfo with invalid success response', async () => {
        const filter = {};
        const dispatchSpy = jest.fn();

        jest.spyOn(api, 'fetchLaunchData').mockImplementation(() => {
            return Promise.resolve(null)
        });
        const thunkDispatch = getSpecxLaunchInfo(filter);
        thunkDispatch(dispatchSpy);

        await flushPromises();

        expect(dispatchSpy).toHaveBeenCalledTimes(2);
    });
    it('getSpecxLaunchInfo with error response', async () => {
        const filter = {};
        const dispatchSpy = jest.fn();

        jest.spyOn(api, 'fetchLaunchData').mockImplementation(() => {
            return Promise.reject({ message: 'Network Error' })
        });
        const thunkDispatch = getSpecxLaunchInfo(filter);
        thunkDispatch(dispatchSpy);

        await flushPromises();

        expect(dispatchSpy).toHaveBeenCalledTimes(3);
    });
    it('formatSpecxLaunchData with land_success key', () => {
        const launchData = [{
            flight_number: 1,
            mission_name: 'Success',
            links: {
                mission_patch_small: 'image'
            },
            mission_id: ['ESSD01', 'ESPOK03'],
            launch_year: 2006,
            launch_success: true,
            rocket: {
                first_stage: {
                    cores: [{
                        land_success: null
                    }]
                }
            }
        }]
        const expectedData = [{
            flightNumber: 1,
            missionName: 'Success',
            image: 'image',
            missionIds: ['ESSD01', 'ESPOK03'],
            launchYear: 2006,
            launchSuccess: true,
            landSuccess: false
        }]
        const result = formatSpecxLaunchData(launchData);
        expect(result).toEqual(expectedData);
    });
    it('formatSpecxLaunchData with land_success: true', () => {
        const launchData = [{
            flight_number: 1,
            mission_name: 'Success',
            links: {
                mission_patch_small: 'image'
            },
            mission_id: ['ESSD01', 'ESPOK03'],
            launch_year: 2006,
            launch_success: true,
            rocket: {
                first_stage: {
                    cores: [{
                        land_success: true
                    }]
                }
            }
        }]
        const expectedData = [{
            flightNumber: 1,
            missionName: 'Success',
            image: 'image',
            missionIds: ['ESSD01', 'ESPOK03'],
            launchYear: 2006,
            launchSuccess: true,
            landSuccess: true
        }]
        const result = formatSpecxLaunchData(launchData);
        expect(result).toEqual(expectedData);
    });
    it('formatSpecxLaunchData without land_success key', () => {
        const launchData = [{
            flight_number: 1,
            mission_name: 'Success',
            links: {
                mission_patch_small: 'image'
            },
            mission_id: ['ESSD01', 'ESPOK03'],
            launch_year: 2006,
            launch_success: true,
            rocket: {
                first_stage: {
                    cores: []
                }
            }
        }]
        const expectedData = [{
            flightNumber: 1,
            missionName: 'Success',
            image: 'image',
            missionIds: ['ESSD01', 'ESPOK03'],
            launchYear: 2006,
            launchSuccess: true,
            landSuccess: false
        }]
        const result = formatSpecxLaunchData(launchData);
        expect(result).toEqual(expectedData);
    });
});
