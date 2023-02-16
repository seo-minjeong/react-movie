import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

// components
import Header from "../components/Header";

// img
import logo from "../img/logo.png";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.wrap}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className={styles.movie}>
              <div className={styles.movie__img}>
                <img src={detail.large_cover_image} alt="영화 이미지" />
              </div>
              <div className={styles.movie__content}>
                <h1 className={styles.movie__title}>{detail.title}</h1>
                <p>{detail.description_intro}</p>
                <ul>
                  <li>{detail.genres}</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Detail;
