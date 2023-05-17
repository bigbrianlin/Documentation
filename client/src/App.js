import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Shared from './components/pages/Shared';
import Department from './components/pages/Department';
import User from './components/pages/User';

import DocumentState from './context/document/DocumentState';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <DocumentState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Shared />} />
              <Route path='/department' element={<Department />} />
              <Route path='/user' element={<User />} />
              <Route path='/' element={<Shared />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </DocumentState>
  );
};

export default App;
