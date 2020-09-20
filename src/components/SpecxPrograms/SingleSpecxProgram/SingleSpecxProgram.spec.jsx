import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import SingleSpecxProgram from "./SingleSpecxProgram";

describe('SingleSpecxProgram', () => {
    it('should render', () => {
        const component = shallow(<SingleSpecxProgram />);
        expect(component.find('.singleSpecxProgram')).toBeTruthy();
        component.unmount();
    });
    it('should render with props', () => {
        const props = {
            title: 'test #1',
            image: 'test',
            missionIds: 'a, b',
            launchYear: 2006,
            launchSuccess: 'true',
            landSuccess: 'false'
        };
        const component = shallow(<SingleSpecxProgram {...props} />);
        expect(
            component.find('.singleSpecxProgram .singleSpecxProgram__image').prop('src')
        ).toEqual(props.image);
        expect(component.find('.singleSpecxProgram__title').text()).toEqual(props.title);
        expect(
            component.find('.singleSpecxProgram__infoValue').at(0).text()
        ).toEqual(props.missionIds);
        expect(
            component.find('.singleSpecxProgram__infoValue').at(1).text()
        ).toEqual(props.launchYear.toString());
        expect(
            component.find('.singleSpecxProgram__infoValue').at(2).text()
        ).toEqual(props.launchSuccess);
        expect(
            component.find('.singleSpecxProgram__infoValue').at(3).text()
        ).toEqual(props.landSuccess);
        component.unmount();
    });
    it('check proptypes: should not throw error', () => {
        const props = {
            title: 'test #1',
            image: 'test',
            missionIds: 'a, b',
            launchYear: 2006,
            launchSuccess: 'true',
            landSuccess: 'false'
        };
        const result = checkPropTypes(
            // eslint-disable-next-line react/forbid-foreign-prop-types
            SingleSpecxProgram.propTypes, props, "props", SingleSpecxProgram.name
        );
        expect(result).toBeUndefined();
    });
})
