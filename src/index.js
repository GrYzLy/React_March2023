import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppArrow from './AppArrow';
import reportWebVitals from './reportWebVitals';
import Greetings from './Greetings/Greetings';
import GreetingsArrow from './Greetings/GreetingsArrow';
import CounterClass from './Counter/CounterClass';
import LoginForm from './LoginForm/LoginForm';
import SecretMessage from './SecretMessage/SecretMessage';
import Quiz from './Quiz/Quiz';
import Lifecycle from './Lifecycle/Lifecycle';
import RouterJS from './Router/RouterJS';
import ReactRouter from './Router/ReactRouter';
import FetchApi from './FetchApi/FetchApi';
import CounterHook from './Counter/CounterHook';
import FetchApiHook from './FetchApi/FetchApiHook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppArrow /> */}
    {/* <Greetings name="Bartosz"/>
    <Greetings name="March 2023!" />
    <GreetingsArrow name="Janek" /> */}

    {/* <CounterClass /> */}
    {/* <LoginForm /> */}
    {/* <SecretMessage /> */}
    {/* <Quiz /> */}
    {/* <Lifecycle /> */}
    {/* <RouterJS /> */}
    {/* <ReactRouter /> */}
    {/* <FetchApi /> */}
    {/* <CounterHook /> */}
    <FetchApiHook />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
