import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Landing from './views/Landing';
import About from './views/About';
import Menu from './views/Menu';
import Nav from './views/Nav';
import Loading from './views/Loading';
import Status from './views/Status';
import ErrorPage from './views/ErrorPage';

function App() {
  const [showCartButton, setShowCartButton] = useState(true)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About showCartButton={showCartButton} setShowCartButton={setShowCartButton} />} />
        <Route path='/menu' element={<Menu showCartButton={showCartButton} setShowCartButton={setShowCartButton} />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/status' element={<Status />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
