<template>
  <div class="sideblock-wrapper">
    <router-view></router-view>
  </div>
</template>
<script>
import ShareIcon from '../assets/share.svg';

export default {
  name: 'ContentBlock',
  components: {
    ShareIcon
  },
  data() {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>

.sideblock-wrapper {
  flex-grow: 1;
  overflow-y: auto;
}
</style>