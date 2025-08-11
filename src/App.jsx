import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './Home'
import NotFoundPage from './NotFound'

import './index.css'
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
