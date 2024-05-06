import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import PaymentForm from './PaymentForm';
import Reserv from './Reserv';
import Destinations from './Destination';
import ContactForm from './Form';
import Foter from './Foter';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/PaymentForm" element={<Elements stripe={stripePromise}><PaymentForm /></Elements>} />
        <Route path='/' element={<React.Fragment><App /><Reserv /><Destinations /><ContactForm /><Foter /></React.Fragment>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals()