import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Idiky } from './Idiky'
import "./assets/scss/Main.scss";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

ReactDOM.render(
  <Idiky history={customHistory} />,
  document.getElementById('root')
);