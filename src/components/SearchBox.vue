<template>
  <div class="search-box">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Enter movie name..."
    />
    <button class="search-btn" @click="searchMovies">Search</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMovieData } from "src/services/moviedb.service";

export default defineComponent({
  setup() {
    const { searchMovies, searchQuery } =
      useMovieData();
    return {
        searchMovies,
        searchQuery
    };
  },
});
</script>

<style lang="scss" scoped>
.search-box {
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  align-items: center;
  margin: 15px 0px 30px 90px;
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
  padding: 8px 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0 0.4rem 0.4rem 0;
  transition: all 0.5 ease;
}

.search-box .search-btn:hover {
  background-color: #0091ea;
  border: 1px solid #fff;
}
</style>
