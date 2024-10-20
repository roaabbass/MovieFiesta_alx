// src/pages/DetailsPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieDetails from "../components/MovieDetails";

const API_KEY = "4fdd443f"; 

const DetailsPage = () => {
  const { id } = useParams(); // Extract movie ID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
      if (response.data.Response === "True") {
        setMovie(response.data);
      } else {
        setError("Movie not found.");
      }
    } catch (error) {
      console.error("Error fetching movie details: ", error);
      setError("An error occurred while fetching movie details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  return (
    <div>
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
};

export default DetailsPage;
