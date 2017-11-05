import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import App from './components/App'
import tradeOffSlidersApp from './reducers'
import registerServiceWorker from './worker/registerServiceWorker'

const theme = createMuiTheme()
let store = createStore(tradeOffSlidersApp)

render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  , document.getElementById('root')
)

registerServiceWorker()
