import React from "react";
import { shallow } from "enzyme";
import SpecxProgramsWrapper from './SpecxProgramsWrapper';

describe('Test SpecxProgramsWrapper', () => {
    let component;
    afterEach(() => {
        component.unmount();
    })
    it("should render", () => {
        component = shallow(<SpecxProgramsWrapper />);
        expect(component).toBeTruthy();
        expect(
            component.find('.specxLaunchPrograms__footerLabel').text()
        ).toEqual("Developed by:");
    });
    it('should have 2 child component', () => {
        component = shallow(<SpecxProgramsWrapper />);
        expect(component.find('SpecxProgramFilters')).toBeTruthy();
        expect(component.find('SpecxPrograms')).toBeTruthy();
    })
});