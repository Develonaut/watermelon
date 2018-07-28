import { Dispatch } from 'redux';
import { FETCH_LIVE_STREAMS_ERROR, FETCH_LIVE_STREAMS_LOADING, FETCH_LIVE_STREAMS_SUCCESS } from 'src/constants/index';
import { LiveStreamsActions, LiveStreamsJSON, Stream } from 'src/types';

const twitchStreamsURL = 'https://api.twitch.tv/kraken/streams/?channel=irisheffects,ninja,develonaut&limit=4';

export function fetchLiveStreams(): ((dispatch: Dispatch<LiveStreamsActions>) => void) {
    return (dispatch: Dispatch<LiveStreamsActions>) => {
        dispatch(fetchLiveStreamsLoading(true));

        fetch(twitchStreamsURL, {
            method: 'GET',
            headers: {
                'Client-Id': 'akib8dqextxoougxslqm5bqtsdaqcn',
                'Accept': 'application/json',
            },
        })
        .then((response) => {
            dispatch(fetchLiveStreamsLoading(false));
            return response.json();
        })
        .then((json) => {
            dispatch(fetchLiveStreamsSuccess(json));
        })
        .catch(() => {
            dispatch(fetchLiveStreamsError(true));
        });
    };
}

export const fetchLiveStreamsSuccess = (json: LiveStreamsJSON): LiveStreamsActions => {
    const streams = json.streams;
    const streamNames = streams.map((stream: Stream) => stream.channel.name);
    return {
        type: FETCH_LIVE_STREAMS_SUCCESS,
        liveStreams: streamNames,
        loading: false,
        error: false,
    };
};

export const fetchLiveStreamsError = (error: boolean) => {
    return {
        type: FETCH_LIVE_STREAMS_ERROR,
        error,
    };
};

export const fetchLiveStreamsLoading = (loading: boolean) => {
    return {
        type: FETCH_LIVE_STREAMS_LOADING,
        loading,
    };
};
