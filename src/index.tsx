import * as React from "react";
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from "./store";
import App from './App';

const store: Store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root") as HTMLElement
);