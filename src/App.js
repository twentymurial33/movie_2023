import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
// import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = " ";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");

  useEffect(() => {});
  return (
    <div className="app">
      <h1>Movie Land</h1>
    </div>
  );
};

export default App;
