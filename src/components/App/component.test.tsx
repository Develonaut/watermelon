import { shallow } from 'enzyme';
import * as React from 'react';
import { AppPresentation } from './component';

describe('App -- ', () => {
  it('renders', () => {
    const mockFetchLiveStreams = jest.fn();
    const mockFetchFollowedStreams = jest.fn();
    const mockFetchFeaturedStreams = jest.fn();

    const wrapper = shallow((
      <AppPresentation
        fetchFollowedStreams={mockFetchFollowedStreams}
        fetchLiveStreams={mockFetchLiveStreams}
        fetchFeaturedStreams={mockFetchFeaturedStreams}
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
