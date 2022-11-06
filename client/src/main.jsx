import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/configureStore'
import { Provider } from 'react-redux';
import '/public/assets/css/globals.scss'
import '/public/assets/css/utils.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
