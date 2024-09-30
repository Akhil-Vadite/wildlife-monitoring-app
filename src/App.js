import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ProblemStatement from './ProblemStatement';
import Solution from './Solution';
import Challenges from './Challenges';
import Header from './Header';
import Quiz from './Quiz'; // Import the Quiz component

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
          <Route path="/quiz" element={<Quiz />} /> {/* Add quiz route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;







