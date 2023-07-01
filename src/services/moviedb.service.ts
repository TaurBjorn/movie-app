import { ref } from "vue";


const searchQuery = ref('');
const movies = ref<Array<{ id: number; original_title: string; release_date: string; poster_path: string; overview: string }>>([]);

const searchMovies = async () => {
    const apiKey = '1db253abc39c479cbbae2879a7caed0b';
    const query = encodeURIComponent(searchQuery.value);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        movies.value = data.results;
        searchQuery.value = '';
    } catch (error) {
        console.error(error);
    }
};

const getMoviePosterUrl = (posterPath: string) => {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    }
    return 'https://example.com/placeholder.jpg';
  };


const useMovieData = () => {
    return {
        searchQuery,
        movies,
        searchMovies,
        getMoviePosterUrl,
    }
}

export { useMovieData };