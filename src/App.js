import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './views/Landing';
import About from './views/About';
import Menu from './views/Menu';
import Nav from './views/Nav';
import Status from './views/Status';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/status' element={<Status />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
