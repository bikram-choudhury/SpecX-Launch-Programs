import React from "react";
import { shallow } from "enzyme";
import { SpecxPrograms } from "./SpecxPrograms";
import checkPropTypes from "check-prop-types";
import SingleSpecxProgram from "./SingleSpecxProgram/SingleSpecxProgram";

describe('SpecxPrograms', () => {
    describe('Test Component', () => {
        let component;
        afterEach(() => {
            component.unmount();
        });
        it("should render", () => {
            component = shallow(<SpecxPrograms />);
            expect(component).toBeTruthy();
        });
        it("should show loading screen", () => {
            const props = {
                isLoading: true,
                specxLoadingError: '',
                specxProgramLaunchData: []
            };
            component = shallow(<SpecxPrograms {...props} />);
            expect(component.find('.specxPrograms h4').text()).toEqual("Loading ...");
        });
        it("should show error screen", () => {
            const props = {
                isLoading: false,
                specxLoadingError: 'Network Error',
                specxProgramLaunchData: []
            };
            component = shallow(<SpecxPrograms {...props} />);
            expect(component.find('.specxPrograms h4').text()).toEqual('Network Error');
        });
        it("should show NO DATA FOUND ! screen", () => {
            const props = {
                isLoading: false,
                specxLoadingError: '',
                specxProgramLaunchData: []
            };
            component = shallow(<SpecxPrograms {...props} />);
            expect(component.find('.specxPrograms h4').text()).toEqual('NO DATA FOUND !');
        });
        it("should show 1 launch mission", () => {
            const props = {
                isLoading: false,
                specxLoadingError: '',
                specxProgramLaunchData: [{
                    flightNumber: 1,
                    missionName: 'test',
                    image: 'test',
                    missionIds: ['a', 'b'],
                    launchYear: 2006,
                    launchSuccess: true,
                    landSuccess: false
                }]
            };
            const expectedProps = {
                title: 'test #1',
                image: 'test',
                missionIds: 'a, b',
                launchYear: 2006,
                launchSuccess: 'true',
                landSuccess: 'false'
            };
            component = shallow(<SpecxPrograms {...props} />);
            expect(component.find(SingleSpecxProgram)).toBeTruthy();
            expect(component.childAt(0).props()).toEqual(expectedProps);
        });
    });
    describe('Test PropTypes', () => {
        it('should not throw errro', () => {
            const props = {
                isLoading: false,
                specxLoadingError: '',
                specxProgramLaunchData: [{
                    flightNumber: 1,
                    missionName: 'test',
                    image: 'test',
                    missionIds: ['a', 'b'],
                    launchYear: 2006,
                    launchSuccess: true,
                    landSuccess: false
                }]
            };
            const result = checkPropTypes(
                // eslint-disable-next-line react/forbid-foreign-prop-types
                SpecxPrograms.propTypes, props, "props", SpecxPrograms.name
            );
            expect(result).toBeUndefined();
        })
        it('should throw errro', () => {
            const props = {
                isLoading: 'true',
                specxLoadingError: '',
                specxProgramLaunchData: [{
                    flightNumber: 1,
                    missionName: 'test',
                    image: 'test',
                    missionIds: ['a', 'b'],
                    launchYear: 2006,
                    launchSuccess: true,
                    landSuccess: false
                }]
            };
            const result = checkPropTypes(
                // eslint-disable-next-line react/forbid-foreign-prop-types
                SpecxPrograms.propTypes, props, "props", SpecxPrograms.name
            );
            expect(result).toBeDefined();
        })
    });
})