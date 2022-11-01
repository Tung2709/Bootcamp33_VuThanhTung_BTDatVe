import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Booking from './Pages/BookingTicket/Booking';
import {createStore} from 'redux'
import rootReducer from './redux/rootReducer'
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Booking/>
    </Provider>

);

