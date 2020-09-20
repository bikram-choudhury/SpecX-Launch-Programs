import React from "react";
import { shallow } from "enzyme";
import { SpecxProgramFilters } from './SpecxProgramFilters';
import rrd from "react-router-dom";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn()
    })
}));

describe('SpecxProgramFilters', () => {
    describe('Test component', () => {
        let component;
        let fetchSpecxLaunchInfoSpy;
        let fetchDataOnLaunchYearSpy;
        let fetchDataOnSuccessfulLaunchSpy;
        let fetchDataOnSuccessfulLandingSpy;
        let resetFiltersSpy;
        let filters;
        let useEffectSpy;
        let useHistorySpy;

        afterEach(() => {
            component.unmount();
        });
        beforeEach(() => {
            fetchSpecxLaunchInfoSpy = jest.fn();
            fetchDataOnLaunchYearSpy = jest.fn();
            fetchDataOnSuccessfulLaunchSpy = jest.fn();
            fetchDataOnSuccessfulLandingSpy = jest.fn();
            resetFiltersSpy = jest.fn();
            filters = {
                launchYear: 2006,
                successfulLaunch: 'true',
                successfulLanding: 'true'
            }
            useEffectSpy = jest.spyOn(React, "useEffect");
            useHistorySpy = jest.spyOn(rrd, "useHistory");
        });

        it('should render', () => {
            const props = {
                fetchSpecxLaunchInfo: fetchSpecxLaunchInfoSpy,
                fetchDataOnLaunchYear: fetchDataOnLaunchYearSpy,
                fetchDataOnSuccessfulLaunch: fetchDataOnSuccessfulLaunchSpy,
                fetchDataOnSuccessfulLanding: fetchDataOnSuccessfulLandingSpy,
                resetFilters: resetFiltersSpy,
                filters
            };
            component = shallow(<SpecxProgramFilters {...props} />);
            expect(component.find('.specxProgramFilters')).toBeTruthy();
            expect(component.find('.specxProgramFilters .specxProgramFilters__clear')).toBeTruthy();
            expect(component.find('Memo(FilterCard)').length).toEqual(3);
            expect(component.find('Memo(FilterCard)').at(0).prop('options').length).toEqual(15);
        });
        it('should call reset filter', () => {
            const props = {
                fetchSpecxLaunchInfo: fetchSpecxLaunchInfoSpy,
                fetchDataOnLaunchYear: fetchDataOnLaunchYearSpy,
                fetchDataOnSuccessfulLaunch: fetchDataOnSuccessfulLaunchSpy,
                fetchDataOnSuccessfulLanding: fetchDataOnSuccessfulLandingSpy,
                resetFilters: resetFiltersSpy,
                filters
            };

            component = shallow(<SpecxProgramFilters {...props} />);
            component.find('.specxProgramFilters .specxProgramFilters__clear').simulate('click');
            expect(resetFiltersSpy).toHaveBeenCalledTimes(1);
        });
        it('should call history push method', () => {
            const props = {
                fetchSpecxLaunchInfo: fetchSpecxLaunchInfoSpy,
                fetchDataOnLaunchYear: fetchDataOnLaunchYearSpy,
                fetchDataOnSuccessfulLaunch: fetchDataOnSuccessfulLaunchSpy,
                fetchDataOnSuccessfulLanding: fetchDataOnSuccessfulLandingSpy,
                resetFilters: resetFiltersSpy,
                filters
            };
            const pushSpy = jest.fn();
            useEffectSpy.mockImplementation(f => f(), []);
            useHistorySpy.mockImplementation(() => ({
                push: pushSpy
            }));

            component = shallow(<SpecxProgramFilters {...props} />);

            expect(pushSpy).toHaveBeenCalledTimes(1);
            expect(pushSpy).toHaveBeenCalledWith({
                pathname: '/',
                search: '?land_success=true&launch_success=true&launch_year=2006'
            });
            expect(fetchSpecxLaunchInfoSpy).toHaveBeenCalledTimes(1);
            expect(fetchSpecxLaunchInfoSpy).toHaveBeenCalledWith(props.filters);
        });
        it('should call history push method with empty search values', () => {
            const props = {
                fetchSpecxLaunchInfo: fetchSpecxLaunchInfoSpy,
                filters: {
                    launchYear: null,
                    successfulLaunch: '',
                    successfulLanding: ''
                }
            };
            const pushSpy = jest.fn();
            useEffectSpy.mockImplementation(f => f(), []);
            useHistorySpy.mockImplementation(() => ({ push: pushSpy }));

            component = shallow(<SpecxProgramFilters {...props} />);
            expect(pushSpy).toHaveBeenCalledTimes(1);
            expect(pushSpy).toHaveBeenCalledWith({ pathname: '/', search: '' });
        });
        it('should call history push method with successfulLanding search values', () => {
            const props = {
                fetchSpecxLaunchInfo: fetchSpecxLaunchInfoSpy,
                filters: {
                    launchYear: null,
                    successfulLaunch: '',
                    successfulLanding: 'true'
                }
            };
            const pushSpy = jest.fn();
            useEffectSpy.mockImplementation(f => f(), []);
            useHistorySpy.mockImplementation(() => ({ push: pushSpy }));

            component = shallow(<SpecxProgramFilters {...props} />);
            expect(pushSpy).toHaveBeenCalledTimes(1);
            expect(pushSpy).toHaveBeenCalledWith({ pathname: '/', search: '?land_success=true' });
        });
        it('should call history push method with successfulLaunch search values', () => {
            const props = {
                fetchSpecxLaunchInfo: fetchSpecxLaunchInfoSpy,
                filters: {
                    launchYear: null,
                    successfulLaunch: 'true',
                    successfulLanding: ''
                }
            };
            const pushSpy = jest.fn();
            useEffectSpy.mockImplementation(f => f(), []);
            useHistorySpy.mockImplementation(() => ({ push: pushSpy }));

            component = shallow(<SpecxProgramFilters {...props} />);
            expect(pushSpy).toHaveBeenCalledTimes(1);
            expect(pushSpy).toHaveBeenCalledWith({ pathname: '/', search: '?launch_success=true' });
        });
        it('should call history push method with launchYear search values', () => {
            const props = {
                fetchSpecxLaunchInfo: fetchSpecxLaunchInfoSpy,
                filters: {
                    launchYear: 2006,
                    successfulLaunch: '',
                    successfulLanding: ''
                }
            };
            const pushSpy = jest.fn();
            useEffectSpy.mockImplementation(f => f(), []);
            useHistorySpy.mockImplementation(() => ({ push: pushSpy }));

            component = shallow(<SpecxProgramFilters {...props} />);
            expect(pushSpy).toHaveBeenCalledTimes(1);
            expect(pushSpy).toHaveBeenCalledWith({ pathname: '/', search: '?launch_year=2006' });
        });
        
    })

})
