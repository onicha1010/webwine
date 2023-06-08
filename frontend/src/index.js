import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import Menu from './page/Menu';
import Request from './page/Request';
import Favorite from './page/Favorite';
import Login from './page/login';
import Newproduct from './page/Newproduct';
import Signup from './page/Signup';
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Cart from "./page/Cart";
import Profile from './page/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route index element={<Home/>}/>
      {/* <Route path='menu' element = {<Menu/>}/> */}
      <Route path='menu/:filterby' element = {<Menu/>}/>
      <Route path='request' element = {<Request/>}/>
      <Route path='favorite' element = {<Favorite/>}/>
      <Route path='login' element = {<Login/>}/>
      <Route path='newproduct' element = {<Newproduct/>}/>
      <Route path='signup' element = {<Signup/>}/>
      <Route path='cart' element = {<Cart/>}/>
      {/* <Route path='profile' element = {<Profile/>}/> */}
      <Route path='profile/:filterby' element = {<Profile/>}/>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
