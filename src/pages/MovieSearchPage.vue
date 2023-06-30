<template>
  <div class="container">
    <div class="search-box">
      <input type="text" v-model="searchQuery" placeholder="Enter movie name" />
      <button class="search-btn" @click="searchMovies">Search</button>
    </div>
    <div class="search-results" v-for="movie in movies" :key="movie.id">
          <img :src="getMoviePosterUrl(movie.poster_path)" alt="movie poster">
          {{ movie.title }}
          <div>{{ movie.release_date }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useMovieData } from "src/services/moviedb.service";

export default defineComponent({
  setup() {
    const { searchMovies, searchQuery, movies, getMoviePosterUrl } = useMovieData();

    onMounted(() => {
      searchMovies();
    });

    return {
      searchMovies,
      searchQuery,
      movies,
      getMoviePosterUrl
    };
  },
});
</script>

<style lang="scss" scoped>

* {
    margin: 0;
    outline: none;
    box-sizing: border-box;
}

.search-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    align-items: center;
    margin: 15px 0 30px 0;
}

.search-box input {
    width: 100%;
    max-width: 400px;
    padding: 8px;
    border-radius: 0.4rem 0 0 0.4rem;
    border: none;
    background-color: rgba(255, 255, 255, 0.9);
}

.search-box .search-btn {
    width: 120px;
    background-color: #01579B;
    color: #fff;
    cursor: pointer;
    padding: 6px 8px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 0 0.4rem 0.4rem 0;
    transition: all 0.5 ease;
}

.search-box .search-btn:hover {
    background-color: #0091ea;
    border: 1px solid #fff;
}

.container {
    width:  100%;
    max-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.movie-title {
  list-style: none;
}

.search-results {
  display: flex;
  flex-direction: column;
}

</style>
