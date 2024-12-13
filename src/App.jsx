
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Page/Home';
import CategoryAndCarousel from './Pages/HomeCategory/HomeCategory';



const App = () => {
  return (
    <Router>
      <Navbar />
      <CategoryAndCarousel/>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
      
        </Routes>
      </div>
    </Router>
  );
};

export default App;
