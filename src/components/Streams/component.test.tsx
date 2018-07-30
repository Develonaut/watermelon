import { shallow } from 'enzyme';
import * as React from 'react';
import { Streams } from './component';

describe('Streams --', () => {
    it('renders', () => {
        const wrapper = shallow(<Streams />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with children', () => {
        const wrapper = shallow(<Streams><h2>Sample Text</h2></Streams>);
        expect(wrapper).toMatchSnapshot();
    });
});
