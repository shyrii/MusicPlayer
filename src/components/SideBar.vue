<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-block" v-for="item in sidebarMenu" :key="item.title">
      <div class="title">{{ item.title }}</div>
      <div class="item" v-for="item in item.list" :key="item">
        <MusicIcon class="sidebar-icon"/>
        {{ item }}</div>
    </div>
  </div>
</template>
<script>
import MusicIcon from '../assets/music.svg';

export default {
  name: 'SideBar',
  components: {
    MusicIcon
  },
  data() {
    return {
      sidebarMenu: [
        {
          title: '推荐',
          list: ['发现音乐','私人FM', '视频', '朋友'],
        },
        {
          title: '我的音乐',
          list: ['本地音乐', '下载管理', '我的音乐云盘', '我的收藏'],
        },
        {
          title: '创建的歌单',
          list: ['我喜欢的音乐'],
        },
        {
          title: '收藏的歌单',
          list: [],
        },
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.sidebar-icon {
  width: 20px;
  height: 20px;
  margin: 0 5px 0 20px;
  path {
    fill: #5c5c5c;
  }
}
.sidebar-icon:hover {
  path {
    fill: #000000;
  }
}

.sidebar-wrapper {
  left: 0;
  width: 200px;
  background-color: #f5f5f7;
  border-right: 1px solid #e1e1e2;
  flex-grow: 1;
  .sidebar-block {
    .title {
      height: 35px;
      line-height: 35px;
      color: #7d7d7d;
      padding: 0 10px;
      font-size: 13px;
      text-align: left;
    }
    .item {
      display: flex;
      align-items: center;
      height: 35px;
      line-height: 35px;
      font-size: 12px;
      color: #5c5c5c;
    }
    .item:hover {
      background-color: #E6E7EA;
      cursor: pointer;
      color: #000000;
      .sidebar-icon {
        path {
          fill: #000000;
        }
      }
    }
  }
}
</style>