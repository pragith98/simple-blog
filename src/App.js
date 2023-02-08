import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Home/>
      <Post/>
      <CreatePost/>
    </React.Fragment>
  );
}

export default App;
