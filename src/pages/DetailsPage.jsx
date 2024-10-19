import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import MovieDetails from '../components/MovieDetails';

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  return movie ? <MovieDetails movie={movie} /> : <p>Loading...</p>;
};

export default DetailsPage;
