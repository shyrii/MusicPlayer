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
    <div class="progress-block">
      <div class="time">01:17</div>
      <div class="progress-bar">
        <vue-slider 
          v-model="sliderValue"
          :tooltip="'none'"
          :railStyle="{ backgroundColor: '#c2c2c4' }"
          :processStyle="{ backgroundColor: '#e93c3c' }"
          :min='0'
          :max='totalTime'
        ></vue-slider>
      </div>
      <div class="time">03:12</div>
    </div>
    <div class="volume-block">
      <VolumeLogo class="small-icon"/>
      <div class="volume-bar">
        <vue-slider 
          v-model="volumeValue"
          :tooltip="'none'"
          :railStyle="{ backgroundColor: '#c2c2c4' }"
          :processStyle="{ backgroundColor: '#e93c3c' }"
          :min='0'
          :max='totalTime'
        ></vue-slider>
      </div>
      <LyricsLogo class="small-icon"/>
    </div>
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import PrevLogo from '../assets/prev.svg';
import NextLogo from '../assets/next.svg';
import PlayLogo from '../assets/play.svg';
import PauseLogo from '../assets/pause.svg';
import VolumeLogo from '../assets/volume.svg';
import LyricsLogo from '../assets/lyrics.svg';

export default {
  name: 'MusicPlayer',
  components: {
    VueSlider,
    PrevLogo,
    NextLogo,
    PlayLogo,
    PauseLogo,
    VolumeLogo,
    LyricsLogo
  },
  data() {
    return {
      sliderValue: 0,
      volumeValue: 0,
      totalTime: '60'
    }
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
  display: flex;
  align-items: center;
  box-sizing: content-box;
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
  .progress-block {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin: 0 20px;
    .time {
      font-size: 13px;
      color: #505050;
    }
    .progress-bar {
      flex-grow: 1;
      margin: 0 15px;
    }
  }
  .volume-block {
    width: 220px;
    display: flex;
    align-items: center;
    .volume-bar {
      margin: 0 20px 0 5px;
      width: 100px;
    }
  }
}
</style>