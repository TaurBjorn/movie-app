<template>
  <div>
    <div class="search-results">
      <div class="card">
        <div class="card-media">
          <img :src="posterPath" alt="title" />
        </div>
        <div class="card-content">
          <div class="card-header">
            <div class="left-content">
              <h3 style="font-weight: 400">{{ originalTitle }}</h3>
              <span style="color: #12efec"
                >Release: {{ releaseDate }}</span
              >
            </div>
            <div class="right-content">
              <!--<a href="posterPath" target="_blank" class="card-btn">See Poster</a>-->
              <button @click="openPoster" class="card-btn">See Poster</button>
            </div>
            <div class="info">{{ overview }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    posterPath: {
      type: String,
      required: true,
    },

    originalTitle: {
      type: String,
      required: true,
    },

    releaseDate: {
      type: String,
      required: true,
    },

    overview: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const openPoster = () => {
      window.open(props.posterPath, '_blank');
    }


    return {
      openPoster
    };
  },
});

</script>

<style lang="scss" scoped>

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
  animation-duration: 2.5s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
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
  font-family: 'Bangers';
}
.search-results .card .card-content .card-btn {
  color: black;
  cursor: pointer;
  padding: 6px 8px;
  border: 1px solid black;
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
  max-height: 250px;
  opacity: 1;
  padding: 8px 0;
}

</style>
