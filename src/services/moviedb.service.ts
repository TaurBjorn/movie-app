import { ref } from "vue";

const searchQuery = ref("");
const showErrorMessage = ref(false);
const movies = ref<
  Array<{
    id: number;
    original_title: string;
    release_date: string;
    poster_path: string;
    overview: string;
  }>
>([]);

const searchMovies = async () => {
  const apiKey = process.env.API_KEY || "";
  const query = encodeURIComponent(searchQuery.value);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    movies.value = data.results;
    searchQuery.value = "";

    query === "" ? (showErrorMessage.value = true) : (showErrorMessage.value = false);

    /*if (movies.value.length === 0) {
      showErrorMessage.value = true;
    }*/

  } catch (error) {
    console.error(error);
    movies.value = [];
    showErrorMessage.value = true;
  }
};

const getMoviePosterUrl = (posterPath: string) => {
  if (posterPath) {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }
  return "https://example.com/placeholder.jpg";
};

const useMovieData = () => {
  return {
    searchQuery,
    movies,
    searchMovies,
    getMoviePosterUrl,
    showErrorMessage,
  };
};

export { useMovieData };
