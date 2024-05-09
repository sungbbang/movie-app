import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import styles from "../styles/Home.module.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          <Header />
          <div className={styles.movieContainer}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
