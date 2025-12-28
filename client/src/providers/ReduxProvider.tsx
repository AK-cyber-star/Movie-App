import React from "react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
    children: ReactNode;
}

export const ReduxProvider: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading persisted state...</div>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
