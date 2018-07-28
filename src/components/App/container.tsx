import { connect } from 'react-redux';
import { fetchFeaturedStreams, fetchFollowedStreams, fetchLiveStreams } from 'src/actions/';
import { StoreState } from 'src/types';
import { AppPresentation } from './component';

export const mapStateToProps = ({streams, liveStreams, error, loading}: StoreState) => {
    return {
      liveStreams,
      streams,
      error,
      loading,
    };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
      fetchLiveStreams: () => dispatch(fetchLiveStreams()),
      fetchFollowedStreams: () => dispatch(fetchFollowedStreams()),
      fetchFeaturedStreams: () => dispatch(fetchFeaturedStreams()),
    };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppPresentation);
