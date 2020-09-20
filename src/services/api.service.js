import axios from 'axios';
export const API_URL = 'https://api.spaceXdata.com/v3/launches';

export const fetchLaunchData = (filter = {}) => {
    let url = `${API_URL}?limit=100`;

    if (filter.launchYear) {
        url += `&launch_year=${filter.launchYear}`;
    }
    if (filter.successfulLaunch) {
        url += `&launch_success=${filter.successfulLaunch}`;
    }
    if (filter.successfulLanding) {
        url += `&land_success=${filter.successfulLanding}`;
    }
    return axios.get(url);
};