import axios from 'axios';
import { fetchLaunchData, API_URL } from "./api.service";

describe('Test API service', () => {
    let getSpy;
    beforeEach(() => {
        getSpy = jest.spyOn(axios, 'get');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should fetch launch data without any filter', () => {
        const expectedUri = `${API_URL}?limit=100`;
        fetchLaunchData()
        expect(getSpy).toHaveBeenCalledWith(expectedUri);
    });
    it('should fetch launch data with launchYear filter', () => {
        const filter = { launchYear: 2006 };
        const expectedUri = `${API_URL}?limit=100&launch_year=${filter.launchYear}`;
        fetchLaunchData(filter)
        expect(getSpy).toHaveBeenCalledWith(expectedUri);
    });
    it('should fetch launch data with successfulLaunch filter', () => {
        const filter = { successfulLaunch: 'true' };
        const expectedUri = `${API_URL}?limit=100&launch_success=${filter.successfulLaunch}`;
        fetchLaunchData(filter)
        expect(getSpy).toHaveBeenCalledWith(expectedUri);
    });
    it('should fetch launch data with successfulLanding filter', () => {
        const filter = { successfulLanding: 'true' };
        const expectedUri = `${API_URL}?limit=100&land_success=${filter.successfulLanding}`;
        fetchLaunchData(filter)
        expect(getSpy).toHaveBeenCalledWith(expectedUri);
    });
    it('should fetch launch data with all filters', () => {
        const filter = { launchYear: 2006, successfulLaunch: 'true', successfulLanding: 'false' };
        const expectedUri = `${API_URL}?limit=100&launch_year=${filter.launchYear
            }&launch_success=${filter.successfulLaunch}&land_success=${filter.successfulLanding}`;
        fetchLaunchData(filter)
        expect(getSpy).toHaveBeenCalledWith(expectedUri);
    });
})
