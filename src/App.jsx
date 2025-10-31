import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home/Home'
import NotFoundPage from './pages/NotFound/NotFound'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
