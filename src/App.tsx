import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PlaceDetails from "./PlaceDetails";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1 className="text-3xl font-bold underline">Historical Places</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place/:id" element={<PlaceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
