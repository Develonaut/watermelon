import { shallow } from 'enzyme';
import * as React from 'react';
import { Stream } from './component';

describe('Stream --', () => {
    it('renders', () => {
        const wrapper = shallow(<Stream streamerName="irisheffects" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders as the focused stream', () => {
        const wrapper = shallow(<Stream streamerName="irisheffects" focused/>);
        expect(wrapper).toMatchSnapshot();
    });
});
