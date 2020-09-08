import React from 'react';
import ReactDOM from 'react-dom';
import './PROJECTS/welcomBack/tdo.css';
import App from './PROJECTS/welcomBack/app.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
