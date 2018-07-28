import { Dispatch } from 'redux';
import { FETCH_FEATURED_STREAMS_ERROR, FETCH_FEATURED_STREAMS_LOADING, FETCH_FEATURED_STREAMS_SUCCESS } from 'src/constants/index';
import { FeaturedStreamsActions, FeaturedStreamsJSON, Stream } from 'src/types';

const featuredStreams = {
    featured: [
        {
            channel: {
                name: 'irisheffects',
            },
        },
        {
            channel: {
                name: 'develonaut',
            },
        },
        {
            channel: {
                name: 'djgrizly',
            },
        },
    ],
};

export function fetchFeaturedStreams(): ((dispatch: Dispatch<FeaturedStreamsActions>) => void) {
    return (dispatch: Dispatch<FeaturedStreamsActions>) => {
        dispatch(fetchFeaturedStreamsSuccess(featuredStreams));
    };
}

export const fetchFeaturedStreamsSuccess = (json: FeaturedStreamsJSON): FeaturedStreamsActions => {
    const streams = json.featured;
    const streamNames = streams.map((stream: Stream) => stream.channel.name);
    return {
        type: FETCH_FEATURED_STREAMS_SUCCESS,
        streams: streamNames,
        loading: false,
        error: false,
    };
};

export const fetchFeaturedStreamsError = (error: boolean) => {
    return {
        type: FETCH_FEATURED_STREAMS_ERROR,
        error,
    };
};

export const fetchFeaturedStreamsLoading = (loading: boolean) => {
    return {
        type: FETCH_FEATURED_STREAMS_LOADING,
        loading,
    };
};
