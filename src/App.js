import { BrowserRouter as Router, Route, Routes, useLocation, matchPath } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const AppContent = () => {
  const location = useLocation();
  
  // Check if the current path matches any of the specified routes
  const routes = ['/', '/create', '/post/:id'];
  const showNavbar = routes.some(route => matchPath(route, location.pathname));

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/post/:id' element={<BlogDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
