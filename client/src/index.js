import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'


import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/main.css'


import App from './components/App'

import * as serviceWorker from './serviceWorker';
import apollo from './core/apollo'




ReactDOM.render(
  <ApolloProvider client={apollo}>
    <App />
  </ApolloProvider>,
  document.getElementById('index')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
