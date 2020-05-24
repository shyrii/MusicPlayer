<template>
  <div class="player-wrapper">
    <div class="icon-block">
      <div class="icon-item side-item">
        <PrevLogo class="small-icon player-icon"/>
      </div>
      <div class="icon-item middle-item">
        <PlayLogo class="big-icon player-icon"/>
      </div>
      <!-- <div class="icon-item">
        <PauseLogo class="big-icon"/>
      </div> -->
      <div class="icon-item side-item">
        <NextLogo class="small-icon player-icon"/>
      </div>
    </div>
    
  </div>
</template>
<script>
import PrevLogo from '../assets/prev.svg';
import NextLogo from '../assets/next.svg';
import PlayLogo from '../assets/play.svg';
import PauseLogo from '../assets/pause.svg';

export default {
  name: 'MusicPlayer',
  components: {
    PrevLogo,
    NextLogo,
    PlayLogo,
    PauseLogo
  }
}
</script>

<style lang="scss" scoped>
.small-icon {
  width: 20px;
  height: 20px;
}
.big-icon {
  width: 25px;
  height: 25px;
}
.player-icon {
  path {
    fill: #ffffff;
  }
}
.player-wrapper {
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f5f5f7;
  border-top: 1px solid #e1e1e2;
  flex-shrink: 0;
  .icon-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 0;
    width: 200px;
    height: 60px;
    padding: 0 20px 0 30px;
    .side-item {
      width: 30px;
      height: 30px;
      border-radius: 30px;
    }
    .middle-item {
      width: 35px;
      height: 35px;
      border-radius: 35px;
    }
    .icon-item{
      background-color: #e83c3c;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-item:hover {
      cursor: pointer;
      background-color: $theme-color;
      transition-duration: .2s;
    }
  }
  
}
</style>