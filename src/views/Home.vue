<template>
  <div class="home-wrapper">
    <PageHeader></PageHeader>
    <SideBar></SideBar>
    <MusicPlayer></MusicPlayer>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import SideBar from '@/components/SideBar.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'

export default {
  name: 'Home',
  components: {
    PageHeader,
    SideBar,
    MusicPlayer
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>