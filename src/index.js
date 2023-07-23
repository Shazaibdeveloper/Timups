import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';  
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Auth0Provider
    domain="dev-l4inl40s2a635xt8.us.auth0.com"
    clientId="G2Zpjjsut1I9HBVjOCqJ1gKktwxQ5f0N"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<App />
</Auth0Provider>
 );
 
reportWebVitals();
