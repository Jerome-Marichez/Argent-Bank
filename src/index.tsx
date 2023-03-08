import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import "./globalStyles.scss";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Layout/Home';
import SignIn from './Layout/SignIn';
import User from './Layout/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pathSignIn, pathHome, pathUser } from './utils/routesNames';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={pathSignIn} element={<SignIn />} />
          <Route path={pathUser} element={<User />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  </React.StrictMode>
);


