import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Shared from './components/pages/Shared';
import Department from './components/pages/Department';
import User from './components/pages/User';
import New from './components/pages/New';
import Document from './components/pages/Document';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import DocumentState from './context/document/DocumentState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <DocumentState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Routes>
                  <Route path='/' element={<Shared />} />
                  <Route path='department' element={<Department />} />
                  <Route path='user' element={<User />} />
                  <Route path='document/:id' element={<Document />} />
                  <Route path='new' element={<New />} />
                  <Route path='register' element={<Register />} />
                  <Route path='login' element={<Login />} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </DocumentState>
    </AuthState>
  );
};

export default App;
