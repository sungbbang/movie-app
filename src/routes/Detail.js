import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultBgImg from "../images/movieWatching.jpg";
import Loading from "../components/Loading";
import styles from "../styles/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [bgImage, setBgImage] = useState(null);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setIsLoading(false);

    const img = new Image();
    img.src = json.data.movie.background_image;
    img.onload = () => setBgImage(json.data.movie.background_image);
    img.onerror = () => setBgImage(defaultBgImg);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className={styles.imgContainer}>
            <img
              className={styles.movieImg}
              src={movie.large_cover_image}
              alt={movie.title}
            />
          </div>
          <div className={styles.movieInfo}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h2 className={styles.year}>{movie.year}</h2>
            <h2 className={styles.genre}>{movie.genres[0]}</h2>
            <h2 className={styles.runtime}> {movie.runtime} Minutes</h2>
            <div className={styles.ratingContainer}>
              <h2 className={styles.rating}>
                <span className={styles.star}>★</span>
                {String(movie.rating).padEnd(3, ".0")}/10
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
