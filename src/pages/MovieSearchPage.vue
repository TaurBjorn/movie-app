<template>
    <div class="container">
      <input type="text" v-model="searchQuery" placeholder="Enter movie name" />
      <button @click="searchMovies">Search</button>
      <ul>
        <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
      </ul>
    </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import { useMovieData } from 'src/services/moviedb.service'

  export default defineComponent({
    setup() {
      const { searchMovies, searchQuery, movies } = useMovieData();

      onMounted(() => {
        searchMovies();
      })

      return {
        searchMovies,
        searchQuery,
        movies
      };
    },
  });
</script>

<style lang="scss" scoped>

</style>
