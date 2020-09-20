import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe('Testing wrapper App', () => {
  it('should render', () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
    component.unmount();
  });
  /* fit('should load component', () => {
    const component = shallow(<App />);
    const routeEl = component.find('Route[path="/"]');
    console.log(routeEl);
    expect(routeEl.first().prop("component")).toBe(SpecxProgramsWrapper);
  }) */
})
