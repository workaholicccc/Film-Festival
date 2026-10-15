import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage'
import Obsession from './pages/movies/obsession';
import Backrooms from './pages/movies/backrooms';
import NoOtherChoice from './pages/movies/no-other-choice';

 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/obsession" element={<Obsession />} />
        <Route path="/movies/backrooms" element={<Backrooms />} />
        <Route path="/movies/no-other-choice" element={<NoOtherChoice />} />
      </Routes>
       
    </BrowserRouter>

  )

}

export default App
