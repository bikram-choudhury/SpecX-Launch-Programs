import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { getSpecxLaunchInfo } from '../../redux/actions/specx/specx.action';
import {
    resetAllFilters,
    setLaunchYear,
    setSuccessfulLanding,
    setSuccessfulLaunch
} from '../../redux/actions/specxFilters/specxFilters.actions';
import './SpecxProgramFilters.scss';
import FilterCard from './FilterCard/FilterCard';

const launchYearOptions = Array(15).fill(0).map((_, index) => index + 2006);
const boolOptions = ['true', 'false'];

export function SpecxProgramFilters({
    fetchSpecxLaunchInfo,
    fetchDataOnLaunchYear,
    fetchDataOnSuccessfulLaunch,
    fetchDataOnSuccessfulLanding,
    resetFilters,
    filters
}) {

    const history = useHistory();
    React.useEffect(() => {
        const params = {}
        filters.launchYear && (params['launch_year'] = filters.launchYear);
        filters.successfulLaunch && (params['launch_success'] = filters.successfulLaunch);
        filters.successfulLanding && (params['land_success'] = filters.successfulLanding);
        const search = queryString.stringify({ ...params });
        history.push({
            pathname: '/',
            search: search ? `?${search}` : ''
        });

        fetchSpecxLaunchInfo(filters);
    }, [fetchSpecxLaunchInfo, filters, history]);

    const handleFilterSelection = useCallback((selected = {}) => {
        if (selected.launchYear) {
            fetchDataOnLaunchYear(selected.launchYear);
        } else if (selected.successfulLaunch) {
            fetchDataOnSuccessfulLaunch(selected.successfulLaunch);
        } else if (selected.successfulLanding) {
            fetchDataOnSuccessfulLanding(selected.successfulLanding);
        } else {
            resetFilters();
        }
    }, [
        fetchDataOnLaunchYear,
        fetchDataOnSuccessfulLaunch,
        fetchDataOnSuccessfulLanding,
        resetFilters
    ]);

    return (
        <div className="specxProgramFilters">
            <div className="specxProgramFilters__wrapper">
                <div className="specxProgramFilters__header">
                    <h4 className="specxProgramFilters__headerTitle">Filters</h4>
                    {
                        (
                            filters.launchYear ||
                            filters.successfulLaunch ||
                            filters.successfulLanding
                        ) ? (
                                <h5
                                    className="specxProgramFilters__clear"
                                    onClick={() => handleFilterSelection()}
                                > ( X ) Clear all </h5>
                            ) : null
                    }

                </div>
                <FilterCard
                    title="Launch Year"
                    options={launchYearOptions}
                    onSelect={handleFilterSelection}
                    selected={filters.launchYear}
                />
                <FilterCard
                    title="Successful Launch"
                    options={boolOptions}
                    onSelect={handleFilterSelection}
                    selected={filters.successfulLaunch}
                />
                <FilterCard
                    title="Successful Landing"
                    options={boolOptions}
                    onSelect={handleFilterSelection}
                    selected={filters.successfulLanding}
                />
            </div>
        </div>
    )
}

SpecxProgramFilters.propTypes = {
    filters: PropTypes.shape({
        launchYear: PropTypes.number,
        successfulLaunch: PropTypes.string,
        successfulLanding: PropTypes.string
    }),
    fetchSpecxLaunchInfo: PropTypes.func,
    fetchDataOnLaunchYear: PropTypes.func,
    fetchDataOnSuccessfulLaunch: PropTypes.func,
    fetchDataOnSuccessfulLanding: PropTypes.func,
    resetFilters: PropTypes.func
}

const mapStateToProps = (state) => ({
    filters: state.specxFilters
});

const mapDispatchToProps = {
    fetchSpecxLaunchInfo: getSpecxLaunchInfo,
    fetchDataOnLaunchYear: setLaunchYear,
    fetchDataOnSuccessfulLaunch: setSuccessfulLaunch,
    fetchDataOnSuccessfulLanding: setSuccessfulLanding,
    resetFilters: resetAllFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecxProgramFilters);
