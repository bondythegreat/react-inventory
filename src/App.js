import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TypePage from './pages/TypePage';
import ManagePage from './pages/ManagePage';

import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App container-fluid'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/type' element={<HomePage />} />
          <Route exact path='/type/:id' element={<TypePage />} />
          <Route exact path='/manage' element={<ManagePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
