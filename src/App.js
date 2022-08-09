import './App.css'
import React from 'react'

import {Login} from './components/Login'
import {Signup} from './components/Signup'
import Welcome from './components/Welcome'
import Crypto from './components/Crypto'
import About from './components/About'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AllCryptoDetails from './components/AllCryptoDetails'
import { Navigate } from 'react-router-dom'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/Auth'


function App() {
    // const  user  = useAuth();
    // const PrivateOutlet = () => {
    // return user ? <Welcome /> : <Navigate to="/login" />;
    // };
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/crypto' element={<ProtectedRoute><Crypto /></ProtectedRoute>} />
        <Route path='/alldetails' element={<ProtectedRoute><AllCryptoDetails /></ProtectedRoute>}/>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App
