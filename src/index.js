import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './Register';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Register />, document.getElementById('root'));
registerServiceWorker();
