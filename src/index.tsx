import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthStore from './store/authStore';

interface State {
    store: AuthStore;
}

const authStore = new AuthStore();
export const StoreContext = createContext<State>({store: authStore});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StoreContext.Provider value={{store: authStore}}>
        <App/>
    </StoreContext.Provider>
);