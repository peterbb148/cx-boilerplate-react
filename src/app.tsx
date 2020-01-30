import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Root from './components/Root';
import About from './components/About';

const App:React.FC<void> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Root />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;