// import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';

import './assets/style/output.css';
import './assets/style/index.scss';

import * as serviceWorker from './serviceWorker';
import ApolloProvider from './ApolloProvider'

ReactDOM.render(ApolloProvider,
	document.getElementById('root')
);

serviceWorker.unregister();
