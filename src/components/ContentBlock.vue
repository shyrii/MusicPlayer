<template>
  <div class="sideblock-wrapper">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'ContentBlock',
  components: {
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