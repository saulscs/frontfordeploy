import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Nav/NavBar'
import Footer from './components/Nav/FooTer';
import 'antd/dist/antd.css'
import 'toastr/build/toastr.css'
import './index.css';

const Router = () => (
  <BrowserRouter>
    <Navbar/>
    <App/>
    <Footer/>
  </BrowserRouter>
)

ReactDOM.render(<Router/>, document.getElementById('root'))

serviceWorker.unregister()
