import { shallow } from 'enzyme';
import * as React from 'react';
import { LogoBar } from './component';

describe('LogoBar --', () => {
    it('renders', () => {
        const wrapper = shallow(<LogoBar />);
        expect(wrapper).toMatchSnapshot();
    });
});
