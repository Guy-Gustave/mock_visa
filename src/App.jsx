import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country/:visa" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
