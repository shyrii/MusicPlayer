<template>
  <div class="home-wrapper">
    <PageHeader></PageHeader>
    <div class="middle-box">
      <div class="side-box">
        <SideBar></SideBar>
        <SideBlock></SideBlock>
      </div>
      <ContentBlock></ContentBlock>
    </div>
    <MusicPlayer></MusicPlayer>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import SideBar from '@/components/SideBar.vue'
import SideBlock from '@/components/SideBlock.vue'
import ContentBlock from '@/components/ContentBlock.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'

export default {
  name: 'Home',
  components: {
    PageHeader,
    SideBar,
    SideBlock,
    ContentBlock,
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
  .middle-box {
    display: flex;
    flex-grow: 1;
    height: 0;
  }
  .side-box {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: stretch;
  }
}
</style>