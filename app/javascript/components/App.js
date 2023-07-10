import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello From Home</h1>} />
      <Route path="/greeting" element={<h1>Hello From Gretting</h1>} />
    </Routes>
  );
}

export default App;