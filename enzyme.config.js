/* eslint-disable import/no-extraneous-dependencies */

/** Used in jest.config.js */
import 'regenerator-runtime/runtime';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () { },
            removeListener: function () { }
        };
    };

window.requestAnimationFrame =
    window.requestAnimationFrame ||
    function (callback) {
        setTimeout(callback, 0);
    };