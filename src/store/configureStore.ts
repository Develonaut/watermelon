import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { streams } from 'src/reducers';
import { StoreState } from '../types';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const configureStore = (initialState: StoreState) => {
    return createStore(
        streams,
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
    );
};
