import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/slick-carousel/slick/slick.css';
import './assets/slick-carousel/slick/slick-theme.css';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
    <Switch>
      <Route path="/setbook" />
      <Route path="/users">
      </Route>
      <Route path="/">

      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
