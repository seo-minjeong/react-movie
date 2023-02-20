import { useEffect, useState } from "react";
import styles from "./Home.module.css";

// component
import Header from "../components/Header";
import Movie from "../components/Movie";
import Pagination from "../components/Pagination";

// img
import logo from "../img/logo.png";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // currentPage: 현재 보여줄 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // postPerPage: 페이지에서 보여줄 데이터의 개수(limits와 같은거)
  const [postPerPage, setPostPerPage] = useState(10);

  // 페이지 내에서 '마지막 포스트'의 인덱스 값(10)
  const indexOfLastPost = currentPage * postPerPage;
  // 페이지 내에서 '첫 포스트'의 인덱스 값(0)
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  // '현재'보는 페이지에서 보여 줄 데이터(0, 10)
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
          <>
            <div className={styles.movies}>
              {currentPosts.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </div>
            <Pagination
              postPerPage={postPerPage}
              totalPosts={movies.length}
              paginate={paginate}
            />
          </>
        )}
      </div>
    </>
  );
}
export default Home;
