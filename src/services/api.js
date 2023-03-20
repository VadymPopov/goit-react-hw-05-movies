import axios from "axios";

const API_KEY ='643a37e49ba2c6b6360de762fa5f81f9';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

 export const fetchTrendingMovies = async(page)=> {
    try {
      const queryStr = `trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`
      const {data: movies} = await axios.get(queryStr);
      return movies;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const searchMovies = async(query)=> {
    try {
      const queryStr = `search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
      const {data: movies} = await axios.get(queryStr);
      return movies;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const getMovieDetails = async(movieId)=> {
    try {
      const queryStr = `movie/${movieId}?api_key=${API_KEY}&language=en-US`
      const {data} = await axios.get(queryStr);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const getMovieCredits = async(movieId)=> {
    try {
      const queryStr = `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      const {data} = await axios.get(queryStr);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const getMovieReview = async(movieId)=> {
    try {
      const queryStr = `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
      const {data} = await axios.get(queryStr);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

 
