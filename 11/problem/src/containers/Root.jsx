import React  from 'react';
import routes from '../routes';
import NuiClient from '@concur/nui-shell/lib/components/NuiClient';

import DevTools from '../components/DevTools';

import configureStore from '../configureStore';


let store = configureStore(window.__INITIAL_STATE__);

export default () => (
    <NuiClient store={store} routes={routes}>
        <DevTools />
    </NuiClient>
)
