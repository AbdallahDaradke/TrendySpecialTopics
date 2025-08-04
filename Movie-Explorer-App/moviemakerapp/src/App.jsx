import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./pages/MovieDetails";
import "./styles.css";
import Navbar from "./components/Navbar";
// import paths from "./components/Paths";
import Paths from "./components/Paths";
// import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* <Link to="/">Home</Link> */}

      <Navbar />
      <Paths />
    </BrowserRouter>
  );
}

export default App;
