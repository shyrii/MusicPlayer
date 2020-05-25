<template>
  <div class="home-wrapper">
    <PageHeader></PageHeader>
    <div class="side-box">
      <SideBar></SideBar>
      <SideBlock></SideBlock>
    </div>   
    <MusicPlayer></MusicPlayer>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import SideBar from '@/components/SideBar.vue'
import SideBlock from '@/components/SideBlock.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'

export default {
  name: 'Home',
  components: {
    PageHeader,
    SideBar,
    SideBlock,
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
  .side-box {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: stretch;
  }
}
</style>