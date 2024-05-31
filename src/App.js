import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginF/LoginForm';
import RegisterForm from './pages/RegisterF/RegisterForm';
import HomePage from './pages/HomePage/HomePage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<HomePage  />} />
      </Routes>
    </Router>
  );
};

export default App;
