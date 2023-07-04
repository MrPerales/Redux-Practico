import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PokesReducer } from './Reducer/index.js';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { capitalLetter, logger } from './middleware/index.js';
import './index.css'
import 'antd/dist/reset.css';


const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger,capitalLetter)
)
const store = createStore(PokesReducer,composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
)
