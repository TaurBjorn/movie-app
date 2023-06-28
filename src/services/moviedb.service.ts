const apiKey = '1db253abc39c479cbbae2879a7caed0b';
const imgApi = 'https://image.tmdb.org/t/p/w1280';
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

let page = 1;
let isSearching = false;


// Fetch data from moviedb api
const fetchMovieData = async (url: string) => {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('No response');
        }
        return await response.json()
    } catch (error) {
        return null;
    }
}

// Fetch and show result based on searchUrl
const fetchAndShowResult = async (url: string) => {
    const data = await fetchMovieData(url);
    if (data && data.results) {
        showResults(data.results);
    }
}




const useMovieData = () => {
    return {

    }
}

export { useMovieData };