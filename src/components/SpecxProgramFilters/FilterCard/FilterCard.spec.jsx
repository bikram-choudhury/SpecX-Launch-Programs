import React from "react";
import { shallow } from "enzyme";
import { FilterCard } from "./FilterCard";

describe('FilterCard', () => {
    describe('Test component', () => {
        let component;
        afterEach(() => {
            component.unmount();
        });
        it('should render', () => {
            const props = {
                title: 'title',
                options: ['true', 'false'],
                selected: '',
                onSelect: jest.fn()
            }
            component = shallow(<FilterCard {...props} />);
            expect(component.find('.filterCard')).toBeTruthy();
            expect(component.find('.filterCard__headerTitle').text()).toEqual(props.title);
            expect(
                component.find('.filterCard__optionsBadge').length
            ).toEqual(props.options.length);
            expect(component.find('.filterCard__optionsBadgeTitle.active').exists()).toBeFalsy();
        })
        it('should render with active value', () => {
            const props = {
                title: 'title',
                options: ['true', 'false'],
                selected: 'true',
                onSelect: jest.fn()
            }
            component = shallow(<FilterCard {...props} />);
            expect(component.find('.filterCard__optionsBadgeTitle.active')).toBeTruthy();
        })
        it('should call onSelect with selected value', () => {
            const props = {
                title: 'Successfull Launch',
                options: ['true', 'false'],
                selected: '',
                onSelect: jest.fn()
            }
            component = shallow(<FilterCard {...props} />);
            component.find('.filterCard__optionsBadgeTitle').at(0).simulate('click', {
                preventDefault: () => { }
            });
            expect(props.onSelect).toHaveBeenCalledTimes(1);
            expect(props.onSelect).toHaveBeenCalledWith({ successfullLaunch: 'true' });
        })
    })

})
