
export interface StoreState {
    liveStreams: string[];
    streams: string[];
    error: boolean;
    loading: boolean;
}

export interface LiveStreamsActions {
    type: string;
    liveStreams?: string[];
    loading?: boolean;
    error?: boolean;
}

export interface FollowedStreamsActions {
    type: string;
    streams?: string[];
    loading?: boolean;
    error?: boolean;
}

export interface FeaturedStreamsActions {
    type: string;
    streams?: string[];
    loading?: boolean;
    error?: boolean;
}

export type Actions = LiveStreamsActions | FollowedStreamsActions | FeaturedStreamsActions;

export interface LiveStreamsJSON {
    streams: Stream[];
}

export interface FollowedStreamsJSON {
    follows: Stream[];
}

export interface FeaturedStreamsJSON {
    featured: Stream[];
}

export interface Stream {
    channel: {
        name: string;
    };
}
