<template>
  <div class="music-wrapper">
    <div class="nav-bar">
      <div class="nav-item" v-bind:class="{ selected: item.id === selectedItem}" v-for="item in navBar" :key="item.id" @click="changeTab(item.id)">{{ item.name }}</div>
    </div>
    <RecommendBlock></RecommendBlock>
  </div>
</template>
<script>
import RecommendBlock from '@/components/RecommendBlock.vue'

export default {
  name: 'MusicHall',
  components: {
    RecommendBlock
  },
  data() {
    return {
      selectedItem: 'recommend',
      navBar: [
        {
          id: 'recommend',
          name: '个性推荐'
        },
        {
          id: 'list',
          name: '歌单'
        },
        {
          id: 'radio',
          name: '主播电台'
        },
        {
          id: 'rank',
          name: '排行榜'
        },
        {
          id: 'singer',
          name: '歌手'
        },
        {
          id: 'latest',
          name: '最新音乐'
        },
      ]
    }
  },
  methods: {
    changeTab(item) {
      this.selectedItem = item;
    }
  }
}
</script>

<style lang="scss" scoped>
.music-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  /* background-color: red; */
  .nav-bar {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    .nav-item {
      margin: 0 22px;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      color: #333333;
    }
    .nav-item:hover {
      color: #C62F2F;
      cursor: pointer;
    }
    .selected {
      color: #C62F2F;
      border-bottom: solid 1.5px #C62F2F;
    }
  }
  .nav-bar::after {
    content: '';
    position: absolute;
    left: 30px;
    top: 50px;
    width: 90%;
    height: 1px;
    background-color: #E1E1E2;
  }
}
</style>