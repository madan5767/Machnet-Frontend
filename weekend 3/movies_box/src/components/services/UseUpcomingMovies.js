import { useEffect, useState } from 'react';
import { getUpcomingMovies} from "./FetchData";

export const useUpcomingMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcomingMovieDetails= async () => {
      setLoading(true);
      const { error, data } = await getUpcomingMovies();
      setLoading(false);

      if (error) {
        return setError(error);
      }

      return setMovieDetails(data);
    };

    fetchUpcomingMovieDetails();
  }, []);

  return { loading,movieDetails, error };
};
