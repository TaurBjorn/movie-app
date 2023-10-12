<template>
  <div class="container">
    <SearchBox></SearchBox>
  </div>
  <div v-if="showErrorMessage" class="error-message">
    No search results found.
  </div>
  <div v-else class="search-results">
    <div v-for="movie in movies" :key="movie.id">
      <CardTemplate
        :poster-path="getMoviePosterUrl(movie.poster_path)"
        :original-title="movie.original_title"
        :release-date="movie.release_date"
        :overview="movie.overview"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useMovieData } from "src/services/moviedb.service";
import SearchBox from "src/components/SearchBox.vue";
import CardTemplate from "src/components/CardTemplate.vue";

export default defineComponent({
  components: {
    SearchBox,
    CardTemplate,
  },
  setup() {
    const { searchMovies, movies, getMoviePosterUrl, showErrorMessage } =
      useMovieData();

    onMounted(() => {
      searchMovies();
    });

    return {
      searchMovies,
      movies,
      getMoviePosterUrl,
      showErrorMessage,
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

.container {
  display: flex;
  flex-direction: row;
  flex: flex-wrap;
}

.search-results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 30px;
}


.error-message {
  text-align: center;
  font-family: bangers;
  color: white;
  margin-top: 150px;
}

@media only screen and (max-width: 500px) {
  .search-box {
    max-width: 200px;
    margin-left: 100px;
  }
}

</style>
