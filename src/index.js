import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import GetStarted from './components/containers/getStarted'
import WeatherContainer from './components/containers/weatherContainer'
import storeConfig from "./slices";

const store = configureStore(storeConfig);

render((
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 1 }}
          atActive={{ opacity: 1 }}
        >
          <Route exact path="/" component={GetStarted} />
          <Route path="/explore" component={WeatherContainer} />
        </AnimatedSwitch>
      </App>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
