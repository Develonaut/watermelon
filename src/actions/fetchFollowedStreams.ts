import { Dispatch } from 'redux';
import { FETCH_FOLLOWED_STREAMS_ERROR, FETCH_FOLLOWED_STREAMS_LOADING, FETCH_FOLLOWED_STREAMS_SUCCESS } from 'src/constants/index';
import { FollowedStreamsActions, FollowedStreamsJSON, Stream } from 'src/types';

const twitchStreamsURL = 'https://api.twitch.tv/kraken/users/irisheffects/follows/channels';

export function fetchFollowedStreams(): ((dispatch: Dispatch<FollowedStreamsActions>) => void) {
    return (dispatch: Dispatch<FollowedStreamsActions>) => {
        dispatch(fetchFollowedStreamsLoading(true));

        fetch(twitchStreamsURL, {
            method: 'GET',
            headers: {
                'Client-Id': 'akib8dqextxoougxslqm5bqtsdaqcn',
                'Accept': 'application/json',
            },
        })
        .then((response) => {
            dispatch(fetchFollowedStreamsLoading(false));
            return response.json();
        })
        .then((json) => {
            dispatch(fetchFollowedStreamsSuccess(json));
        })
        .catch(() => {
            dispatch(fetchFollowedStreamsError(true));
        });
    };
}

export const fetchFollowedStreamsSuccess = (json: FollowedStreamsJSON): FollowedStreamsActions => {
    const streams = json.follows;
    const streamNames = streams.map((stream: Stream) => stream.channel.name);
    return {
        type: FETCH_FOLLOWED_STREAMS_SUCCESS,
        streams: streamNames,
        loading: false,
        error: false,
    };
};

export const fetchFollowedStreamsError = (error: boolean) => {
    return {
        type: FETCH_FOLLOWED_STREAMS_ERROR,
        error,
    };
};

export const fetchFollowedStreamsLoading = (loading: boolean) => {
    return {
        type: FETCH_FOLLOWED_STREAMS_LOADING,
        loading,
    };
};
