import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Womenpage from './containers/Womenpage';
function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap');
        body, html, * {
          font-family: 'Jost', Arial, sans-serif !important;
        }
      `}</style>
      <Router>
    <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/women" element={<Womenpage />} />
          </Routes>
     </div>
      </Router>
    </>
  );
}

export default App;
