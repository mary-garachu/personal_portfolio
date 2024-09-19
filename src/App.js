import './App.scss';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
);

  
}

export default App;
