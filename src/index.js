import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './worker/registerServiceWorker';

ReactDOM.render(
  (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
    ), document.getElementById('root')
)
registerServiceWorker()
