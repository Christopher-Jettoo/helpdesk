import React from "react";
import SubmitForm from "./SubmitForm";
import Admin from "./Admin";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<SubmitForm/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;


