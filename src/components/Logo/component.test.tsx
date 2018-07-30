import { shallow } from 'enzyme';
import * as React from 'react';
import { Logo } from './component';

describe('Logo --', () => {
    it('renders', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper).toMatchSnapshot();
    });
});
