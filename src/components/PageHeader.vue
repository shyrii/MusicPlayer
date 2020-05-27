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
        <div class="user-name cursor" @click="showLoginModal">未登录</div>
      </div>
      <Theme class="theme cursor" />
      <Message class="message cursor" />
      <Setting class="setting cursor" />
    </div>
    <modal v-if="isShowModal" name="login-modal" transition="pop-out" :width="300" :focus-trap="true" :height="400">
      <div class="modal-box">
        <div class="box-header">
          <Close class="close-icon"/>
        </div>
        <div class="box-img"></div>
        <div class="input-wrapper">
          <div class="input-box input-border">
            <PhoneNumber class="icon"/>
            <input v-model="phoneNumber" placeholder="请输入手机号"/>
          </div>
          <div class="input-box">
            <Password class="icon"/>
            <input v-model="password" type="password" placeholder="请输入密码"/>
          </div>
        </div>
        <div class="btn" @click="login">登录</div>
        <div class="link">注册</div>
      </div>
    </modal>
  </div>
</template>

<script>
import urls from '../apis/urls'
import Logo from '../assets/music-logo.svg';
import Avater from '../assets/avater.svg';
import Theme from '../assets/theme.svg';
import Message from '../assets/message.svg';
import Setting from '../assets/setting.svg';
import Close from '../assets/close.svg';
import PhoneNumber from '../assets/phone.svg';
import Password from '../assets/password.svg';
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
    Close,
    PhoneNumber,
    Password,
    SearchBar,
    NevagationButton
  },
  props: {
  },
  data() {
    return {
      isShowModal: false,
      phoneNumber: '',
      password: '',
    }
  },
  methods: {
    showLoginModal() {
      this.isShowModal = true;
      this.$modal.show('login-modal');
    },
    async login() {
      const res = await this.axios({
        methods: 'post',
        url: urls.login,
        data: {
          phone: this.phoneNumber,
          password: this.password
        }
      })
    }
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
  flex-shrink: 0;
  background-color: $theme-color;
  width: 100%;
  height: 60px;
  padding: 0 25px;
  z-index: 1;
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
  .modal-box {
    width: 300px;
    height: 400px;
    background-color: #FAFAFA;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    .box-header {
      position: relative;
      width: 100%;
      height: 20px;
      .close-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 16px;
        height: 16px;
      }
      .close-icon:hover {
        cursor: pointer;
        path {
          fill: #666666
        }
      }
    }
    .box-img {
      background: no-repeat url('../assets/phone-img.png');
      background-size: cover;
      width: 100px;
      height: 100px;
      margin: 25px 0;
    }
    .input-wrapper {
      width: 80%;
      border: solid 1px #D8D8D8;
      border-radius: 5px;
      input {
        outline: 0;
        border: none;
        height: 35px;
      }
      input::placeholder {
        color: #A9A9A9;
        font-size: 12px;
      }
      .icon {
        margin: 0 10px;
        width: 18px;
        height: 18px;
      }
      .input-box {
        display: flex;
        align-items: center;
        width: 100%;
      }
      .input-border {
        border-bottom: solid 1px #D8D8D8;;
      }
    }
    .btn {
      width: 80%;
      height: 40px;
      line-height: 40px;
      color: #FFFFF3;
      background-color: #EA4848;
      border-radius: 5px;
      margin: 20px 0 15px 0;
    }
    .btn:hover {
      cursor: pointer;
      background-color: #C72E2E;
    }
    .link {
      color: #333333;
      text-decoration: underline;
      font-size: 14px;
    }
    .link:hover {
      cursor: pointer;
    }
  }
}
</style>
