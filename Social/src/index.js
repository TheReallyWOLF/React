import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Yora'},
    {id: '3', name: 'Wolf'},
    {id: '4', name: 'Lissa'},
    {id: '5', name: 'Admin'}
];

let messagesData = [
    {id: '1', message: "Ку!"},
    {id: '2', message: "Ку а рри"},
    {id: '3', message: "Пшел вон!"},
    {id: '4', message: "ДА!"},
    {id: '5', message: "Нет!"}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData = { dialogsData } messagesData={ messagesData }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
