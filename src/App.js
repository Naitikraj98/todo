import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Tab/Home';
import Event from './Pages/Tab/Event';
import Main from './Pages/Tab/Main';
import OurStory from './Pages/Tab/OurStory';
import Demo from './Pages/Tab/Demo';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Event" element={<Event />} />
    <Route path="/Main" element={<Main />} />
    <Route path="/OurStory" element={<OurStory />} />
    <Route path="/Demo" element={<Demo />} />
    </Routes> 
    </>
  );
}

export default App;



