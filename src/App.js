import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import SmartPower from './components/SmartPower';
import TheGridBox from './components/TheGridBox';
import Gallery from './components/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartpower" element={<SmartPower />} />
        <Route path="/gridbox" element={<TheGridBox />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
