import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RootContainer from './containers/RootContainer';

function App() {
    return (
        <Provider store={store}>
            <RootContainer
            />
        </Provider>);
}

export default App;
