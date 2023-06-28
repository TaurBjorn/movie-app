<template>
    <div class="container">
        <div class="search-box">
            <a href="#">
                <h1>MovieVerse</h1>
            </a>
            <form class="search-form">
                <input type="text" class="search-input" placeholder="Start Searching...">
                <button class="search-btn" type="submit">Search</button>
            </form>
        </div>
        <div class="result"></div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>

<style lang="scss" scoped>

</style>
