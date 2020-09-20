import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    getSpecxProgramLaunchData,
    getSpecxProgramLoadingStatus,
    getSpecxProgramLoadingError
} from '../../redux/reducers';
import './SpecxPrograms.scss';
import SingleSpecxProgram from './SingleSpecxProgram/SingleSpecxProgram';

export function SpecxPrograms({ isLoading, specxLoadingError, specxProgramLaunchData }) {
    return (
        <div className="specxPrograms">
            {
                isLoading ? (<h4>Loading ...</h4>) : (
                    specxLoadingError ? <h4>{specxLoadingError}</h4> : (
                        specxProgramLaunchData &&
                            specxProgramLaunchData.length ?
                            specxProgramLaunchData.map(data => (
                                <SingleSpecxProgram
                                    key={data.flightNumber}
                                    title={`${data.missionName} #${data.flightNumber}`}
                                    image={data.image}
                                    missionIds={data.missionIds.join(', ')}
                                    launchYear={data.launchYear}
                                    launchSuccess={data.launchSuccess.toString()}
                                    landSuccess={data.landSuccess.toString()}
                                />
                            )) : (<h4>NO DATA FOUND !</h4>)
                    )
                )
            }
        </div>
    )
}

SpecxPrograms.propTypes = {
    isLoading: PropTypes.bool,
    specxLoadingError: PropTypes.string,
    specxProgramLaunchData: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            missionIds: PropTypes.array,
            launchYear: PropTypes.number,
            launchSuccess: PropTypes.bool,
            landSuccess: PropTypes.bool
        })
    )
}

const mapStateToProps = (state) => ({
    isLoading: getSpecxProgramLoadingStatus(state),
    specxLoadingError: getSpecxProgramLoadingError(state),
    specxProgramLaunchData: getSpecxProgramLaunchData(state)
});

export default connect(mapStateToProps)(SpecxPrograms);
