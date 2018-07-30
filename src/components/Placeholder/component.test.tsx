import { shallow } from 'enzyme';
import * as React from 'react';
import { Placeholder } from './component';

describe('Placeholder --', () => {
    it('renders', () => {
        const wrapper = shallow(<Placeholder />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders at full width', () => {
        const wrapper = shallow(<Placeholder fullWidth />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders at full height', () => {
        const wrapper = shallow(<Placeholder fullHeight/>);
        expect(wrapper).toMatchSnapshot();
    });
});
