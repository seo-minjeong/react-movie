import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <img src={detail.large_cover_image} alt="영화 이미지" />
          </div>
          <h1>{detail.title}</h1>
          <ul>
            <li>{detail.genres}</li>
          </ul>
          <p>{detail.description_intro}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
