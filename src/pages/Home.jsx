import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovie, topRatedMovie, upcomingMovie, loading } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return <ClipLoader color="#fff" loading={loading} size={150} />;
  }
  return (
    <div>
      <Banner movie={popularMovie.results[0]} />
      <h1>Popular Movies</h1>
      <MovieSlide movies={popularMovie} />
      <h1>Top Rated Movies</h1>
      <MovieSlide movies={topRatedMovie} />
      <h1>Upcoming Movies</h1>
      <MovieSlide movies={upcomingMovie} />
    </div>
  );
};

export default Home;
