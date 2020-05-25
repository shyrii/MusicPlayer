<template>
  <div class="sideblock-wrapper">
    <div class="cover-img"></div>
    <div class="middle-block">
      <div class="song-name">你就不要想起我零零零零</div>
      <div class="singer-name">田馥甄</div>
    </div>
    <div class="right-block">
      <img class="like-icon" src="../assets/dislike.png"/>
      <ShareIcon class="sideblock-icon"/>
    </div>
  </div>
</template>
<script>
import ShareIcon from '../assets/share.svg';

export default {
  name: 'PrivateFM',
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
  display: flex;
  align-items: center;
  left: 0;
  width: 200px;
  height: 55px;
  background-color: #f5f5f7;
  border-top: 1px solid #e1e1e2;
  border-right: 1px solid #e1e1e2;
  .cover-img {
    margin-left: 5px;
    width: 45px;
    height: 45px;
    background: no-repeat url("../assets/cover.png");
    background-size: cover;
  }
  .middle-block {
    padding: 10px 10px 10px 5px;
    text-align: left;
    .song-name {
      height: 20px;
      line-height: 20px;
      width: 110px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 13px;
      color: #333333;
    }
    .singer-name {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #666666;
    }
  }
  .right-block {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    .like-icon {
      width: 16px;
      height: 16px;
    }
    .like-icon:hover {
      cursor: pointer;
    }
    .sideblock-icon {
      margin-top: 5px;;
      width: 14px;
      height: 14px;
    }
    .sideblock-icon:hover {
      cursor: pointer;
      path {
        fill: #000000;
      }
    }
  }
}
</style>