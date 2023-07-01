<template>
  <div class="container">
    <div class="search-box">
      <input type="text" v-model="searchQuery" placeholder="Enter movie name" />
      <button class="search-btn" @click="searchMovies">Search</button>
    </div>
  </div>
  <div>
    <div v-if="movies.length === 0" class="error-message">
      No search results found.
    </div>
    <div v-else class="search-results">
      <div class="card" v-for="movie in movies" :key="movie.id">
        <div class="card-media">
          <img :src="getMoviePosterUrl(movie.poster_path)" alt="title" />
        </div>
        <div class="card-content">
          <div class="card-header">
            <div class="left-content">
              <h3 style="font-weight: 400">{{ movie.original_title }}</h3>
              <span style="color: #12efec"
                >Release: {{ movie.release_date }}</span
              >
            </div>
            <div class="right-content">
              <a href="#" target="_blank" class="card-btn">See Poster</a>
            </div>
            <div class="info">{{ movie.overview }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useMovieData } from "src/services/moviedb.service";

export default defineComponent({
  setup() {
    const { searchMovies, searchQuery, movies, getMoviePosterUrl } =
      useMovieData();

    onMounted(() => {
      searchMovies();
    });

    return {
      searchMovies,
      searchQuery,
      movies,
      getMoviePosterUrl,
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
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.9);
}

.search-box .search-btn {
  width: 120px;
  background-color: #01579b;
  color: #fff;
  cursor: pointer;
  padding: 9px 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0 0.4rem 0.4rem 0;
  transition: all 0.5 ease;
}

.search-box .search-btn:hover {
  background-color: #0091ea;
  border: 1px solid #fff;
}

.search-results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 30px;
}

.search-results .card {
  position: relative;
  font-size: 14px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 0.4rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  line-height: 20px;
  width: 285px;
  height: 360px;
  overflow: hidden;
  transition: all 0.5 ease;
}

.search-results .card .card-content {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 100px 10px 5px;
  background-image: linear-gradient(
    180deg,
    rgba(51, 55, 69, 0),
    rgba(16, 21, 40, 0.95)
  );
  transition: all 0.5 ease;
}

.search-results .card .card-content .card-header {
  padding: 8px 0;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.search-results .card .card-content .card-header .left-content h3 {
  color: white;
  font-size: 30px;
}

.search-results .card .card-content .card-btn {
  color: #fff;
  cursor: pointer;
  padding: 6px 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.4rem;
  transition: all 0.5s ease;
  text-decoration: none;
}

.search-results .card .card-media img {
  width: 100%;
}

.search-results .card .card-content .info {
  max-height: 0;
  opacity: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  transition: all 0.5s ease;
  color: white;
}

.search-results .card:hover .card-content {
  background-image: linear-gradient(180deg, rgba(51, 55, 69, 0), #101528 48%);
}

.search-results .card:hover .card-btn {
  background-color: #0091ea;
  border-color: #0091ea;
}

.search-results .card:hover .info {
  max-height: 200px;
  opacity: 1;
  padding: 8px 0;
}

.error-message {
  text-align: center;
}


</style>
