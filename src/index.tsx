import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import "./globalStyles.scss";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pathSignIn, pathUser } from './utils/routesNames';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={pathSignIn} element={<SignIn />} />
          <Route path={pathUser} element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


