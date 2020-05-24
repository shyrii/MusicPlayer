<template>
  <div class="header-wrapper">
    <div class="left-box">
      <div class="logo-box">
        <Logo class="logo" />
        <div class="logo-text">网易云音乐</div>
      </div>
      <NevagationButton class="nevagation-button"></NevagationButton>
      <SearchBar></SearchBar>
    </div>
    <div class="right-box">
      <div class="user">
        <Avater class="avater" />
        <div class="user-name cursor">未登录</div>
      </div>
      <Theme class="theme cursor" />
      <Message class="message cursor" />
      <Setting class="setting cursor" />
    </div>
  </div>
</template>

<script>
import Logo from '../assets/music-logo.svg';
import Avater from '../assets/avater.svg';
import Theme from '../assets/theme.svg';
import Message from '../assets/message.svg';
import Setting from '../assets/setting.svg';
import SearchBar from '@/components/SearchBar.vue';
import NevagationButton from '@/components/NevagationButton.vue';
export default {
  name: 'PageHeader',
  components: {
    Logo,
    Avater,
    Theme,
    Message,
    Setting,
    SearchBar,
    NevagationButton
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.color-change {
  path {
    fill: $header;
  }
}
.color-change:hover {
  path {
    fill: $header-hover;
  }
}
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $theme-color;
  width: 100%;
  height: 60px;
  padding: 0 25px;
  .cursor {
    cursor: pointer;
  }
  .left-box{
    display: flex;
    align-items: center;
    .logo-box {
      display: flex;
      align-items: center;
      .logo {
        width: 25px;
        height: 25px;
        path {
          fill: $header-hover;
        }
      }
      .logo-text {
        margin: 0 3px;
        color: $header-hover;
        font-size: 16px;
        line-height: 16px;
      }
    }
    .nevagation-button {
      margin: 0 12px 0 55px;
    }
  }
  
  .right-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    .user {
      display: flex;
      align-items: center;
      .avater {
        width: 30px;
        height: 30px;
      }
      .user-name {
        color: $header;
        font-size: 12px;
        margin: 0 5px;
      }
      .user-name:hover {
        color: $header-hover;
      }
    }
    .theme {
      width: 20px;
      height: 20px;
      @extend .color-change
    }
    .message {
      width: 22px;
      height: 22px;
      @extend .color-change
    }
    .setting {
      width: 20px;
      height: 20px;
      @extend .color-change
    }
  }
  
}
</style>
