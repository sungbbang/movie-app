import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";

function Movie({ id, coverImg, title, rating }) {
  const maxTitleLength = 50;
  return (
    <div className={styles.item}>
      <Link to={`/movie/${id}`} className={styles.link}>
        <div className={styles.thumb}>
          <img src={coverImg} alt={title} />
        </div>
        <div className={styles.titleContainer}>
          <strong className={styles.title}>
            {title.length < maxTitleLength
              ? title
              : `${title.slice(0, maxTitleLength)}...`}
          </strong>
          <span className={styles.rating}>
            <span className={styles.starIcon}>★</span>
            {String(rating).padEnd(3, ".0")}
          </span>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
