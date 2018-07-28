import * as Constants from 'src/constants';
import { FeaturedStreamsActions, FollowedStreamsActions, LiveStreamsActions } from 'src/types';
import { StoreState } from 'src/types';

export const streams = (state: StoreState, action: LiveStreamsActions & FollowedStreamsActions & FeaturedStreamsActions): StoreState => {
    switch (action.type) {
        case Constants.FETCH_LIVE_STREAMS_ERROR:
        case Constants.FETCH_LIVE_STREAMS_LOADING:
        case Constants.FETCH_LIVE_STREAMS_SUCCESS:
            return {
                ...state,
                liveStreams: action.liveStreams || state.liveStreams,
                error: action.error || false,
                loading: action.loading || false,
            };
        case Constants.FETCH_FOLLOWED_STREAMS_ERROR:
        case Constants.FETCH_FOLLOWED_STREAMS_LOADING:
        case Constants.FETCH_FOLLOWED_STREAMS_SUCCESS:
            return {
                ...state,
                streams: action.streams || state.streams,
                error: action.error || false,
                loading: action.loading || false,
            };
        case Constants.FETCH_FEATURED_STREAMS_ERROR:
        case Constants.FETCH_FEATURED_STREAMS_LOADING:
        case Constants.FETCH_FEATURED_STREAMS_SUCCESS:
            return {
                ...state,
                streams: action.streams || state.streams,
                error: action.error || false,
                loading: action.loading || false,
            };
        default:
            return state;
    }
};
