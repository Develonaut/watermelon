import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { streams } from 'src/reducers';
import { StoreState } from '../types';

export const configureStore = (initialState: StoreState) => {
    return createStore(
        streams,
        initialState,
        applyMiddleware(thunk),
    );
};
