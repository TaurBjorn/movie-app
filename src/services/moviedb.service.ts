import { ref } from "vue";


const searchQuery = ref('');
const movies = ref<Array<{ id: number; title: string }>>([]);

const searchMovies = async () => {
    const apiKey = '1db253abc39c479cbbae2879a7caed0b';
    const query = encodeURIComponent(searchQuery.value);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        movies.value = data.results;
    } catch (error) {
        console.error(error);
    }
};

const useMovieData = () => {
    return {
        searchQuery,
        movies,
        searchMovies
    }
}

export { useMovieData };