import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./components/pages/movieDetail/movie";
import SearchResults from "./components/SearchResults/searchResults";
import ErrorPage from "./components/pages/ErrorPage/errorPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
