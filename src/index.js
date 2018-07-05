import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/app.css';
import App from '../src/js/App';
import registerServiceWorker from '../src/js/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
