import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ProblemStatement from './ProblemStatement';
import Solution from './Solution';
import Challenges from './Challenges';
import Header from './Header';
import MyComponent from './MyComponent'; // Import the new MyComponent

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<ProblemStatement />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/images" element={<MyComponent />} /> {/* New route for images */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;






