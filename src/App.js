import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
