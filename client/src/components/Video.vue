<template>
  <div v-show="showYT">
    <youtube
      v-if="video"
      ref="youtube"
      :videoId="video.video_id"
      :playerVars="video.options"
      @ended="done">
    </youtube>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      showYT: true
    }
  },
  computed: mapState({
    video: state => state.video
  }),
  methods: {
    done() {
      this.showYT = false;
    }
  }
}
</script>

