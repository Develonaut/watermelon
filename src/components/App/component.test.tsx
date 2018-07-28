import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppPresentation } from './component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockFetchLiveStreams = jest.fn();
  const mockFetchFollowedStreams = jest.fn();
  const mockFetchFeaturedStreams = jest.fn();

  ReactDOM.render((
    <AppPresentation
      fetchFollowedStreams={mockFetchFollowedStreams}
      fetchLiveStreams={mockFetchLiveStreams}
      fetchFeaturedStreams={mockFetchFeaturedStreams}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
