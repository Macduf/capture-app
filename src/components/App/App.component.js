// @flow
/* eslint-disable import/first */
import './app.css';
import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContents } from './AppContents.component';
import {
    RulesEngineVerboseInitializer,
} from '../../core_modules/capture-core/components/RulesEngineVerboseInitializer';
import {
    MetadataAutoSelectInitializer,
} from '../../core_modules/capture-core/components/MetadataAutoSelectInitializer';


type Props = {
    store: ReduxStore,
};

const queryClient = new QueryClient();

export const App = ({ store }: Props) => (
    <React.Fragment>
        <Provider
            store={store}
        >
            <QueryClientProvider client={queryClient}>
                <MetadataAutoSelectInitializer>
                    <RulesEngineVerboseInitializer>
                        <AppContents />
                    </RulesEngineVerboseInitializer>
                </MetadataAutoSelectInitializer>
            </QueryClientProvider>
        </Provider>
    </React.Fragment>
);
