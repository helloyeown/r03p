import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductInput from './components/products/ProductInput';
import ModifyPage from './pages/products/ModifyPage';
import ModifyComponent from './components/products/ModifyComponent';
import { Provider } from 'react-redux';
import store from './store/store';
import { RouterProvider } from 'react-router-dom';
import router from './routers/root';
import CountButtons from './components/counter/CountButtons';
import CountDisplay from './components/counter/CountDisplay';
import KakaoLoginComponent from './components/kakao/KakaoLoginComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <KakaoLoginComponent></KakaoLoginComponent>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
