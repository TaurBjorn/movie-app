import { error } from "console";

const apiKey = '1db253abc39c479cbbae2879a7caed0b';
// const imageAPI = 'https://image.tmdb.org/t/p/w1280'; bestaat blijkbaar niet
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

let page = 1;
let isSearching = false;

//  Fetch data from database
const fetchData = async (url: string) => {
    try {
        const response = await fetch(url);
        if(response.ok) {
            throw new Error("No response from network");
        }
        return await response.json();
    } catch (error) {
        return null;
    }
}

// fetch and show results based on the searchURl
const fetchAndShowResult = async (url:string) => {
    const data = await fetchData(url);
    if(data && data.results) {
        // showResults(data.results);
    }

}

// Show results in page
