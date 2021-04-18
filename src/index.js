import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import App from "./components/App"
import apiFacade from "./apiFacade";
import AppRouting from "./components/App_routing"

//ReactDOM.render(<App RapiFacade={apiFacade}/>, document.getElementById('root'));
ReactDOM.render(<AppRouting apiFacade={apiFacade}/>, document.getElementById('root'));


