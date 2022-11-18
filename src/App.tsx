import { FC } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import DriversList from './pages/DriversList';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="drivers" element={<DriversList />} />

        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
