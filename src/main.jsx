import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { capitalLetter, logger } from './middleware/index.js';
import thunk from 'redux-thunk';
import './index.css'
import 'antd/dist/reset.css';
import { rootReducer } from './Reducer/RootReducer.js';

// para usar thunk composeAlt
const  composeAlt= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk,logger))

const store = createStore(rootReducer,composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>

      <App />
    </Provider>
  </>,
)
