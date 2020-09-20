import { fetchLaunchData } from "../../../services/api.service";
import {
    SAVE_LAUNCH_DATA,
    SAVE_LAUNCH_ERROR,
    START_LOADER,
    STOP_LOADER
} from "../../action.type.constants";

export const saveLaunchData = (launchData) => ({
    type: SAVE_LAUNCH_DATA,
    payload: {
        list: launchData
    }
});

export const startLoader = () => ({ type: START_LOADER });

export const stopLoader = () => ({ type: STOP_LOADER });

export const setLaunchError = (error) => ({
    type: SAVE_LAUNCH_ERROR,
    payload: { error }
});

export const getSpecxLaunchInfo = (filter) => {
    return (dispatch) => {
        dispatch(startLoader());
        fetchLaunchData(filter)
            .then(response => {
                response && dispatch(
                    saveLaunchData(
                        formatSpecxLaunchData(response.data)
                    )
                );
                dispatch(stopLoader());
            })
            .catch(error => {
                dispatch(setLaunchError(error.message));
                dispatch(stopLoader());
            })
    }
};

export const formatSpecxLaunchData = (launchData) => {
    return launchData.map(data => ({
        flightNumber: data.flight_number,
        missionName: data.mission_name,
        image: data.links.mission_patch_small,
        missionIds: data.mission_id,
        launchYear: data.launch_year,
        launchSuccess: !!data.launch_success,
        landSuccess: !!(data.rocket.first_stage &&
            data.rocket.first_stage.cores[0] &&
            data.rocket.first_stage.cores[0].land_success)
    }))
}