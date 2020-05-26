<template>
  <div class="recommend-wrapper">
    <div class="carousel-box"></div>
    <div class="songlist-box">
      <div class="title">推荐歌单</div>
      <div class="list-block">
        <div class="item-wrapper">
          <div class="item">
            <div class="item-box border">
              <div class="week">星期一</div>
              <div class="day">25</div>
            </div>
          </div>
          <div class="name">每日歌曲推荐</div>
        </div>
        <div class="item-wrapper" v-for="item in recommend" :key="item.id">
          <div class="item">
            <div class="item-box">
              <img src="../assets/demo.png" class="item-img"/>
              <div class="listen-block">
                <img src="../assets/headset.png"/>
                <span>{{ item.playcount }}</span>
              </div>
            </div>
          </div>
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShareIcon from '../assets/share.svg';

export default {
  name: 'RecommendBlock',
  components: {
    ShareIcon
  },
  data() {
    return {
      recommend: [
        {
          id: 12,
          name: '重温昔日主旋律，唤起青春回忆杀',
          picUrl: '../assets/demo.png',
          playcount: '234万',
        },
        {
          id: 12,
          name: '重温昔日主旋律，唤起青春回忆杀',
          picUrl: '../assets/demo.png',
          playcount: '234万',
        },
        {
          id: 12,
          name: '重温昔日主旋律，唤起青春回忆杀',
          picUrl: '../assets/demo.png',
          playcount: '234万',
        },
        {
          id: 12,
          name: '重温昔日主旋律，唤起青春回忆杀',
          picUrl: '../assets/demo.png',
          playcount: '234万',
        },
        {
          id: 12,
          name: '重温昔日主旋律，唤起青春回忆杀',
          picUrl: '../assets/demo.png',
          playcount: '234万',
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>

.recommend-wrapper {
  width: 100%;
  .carousel-box {
    background: no-repeat url("../assets/carousel.png");
    background-size: cover;
    width: 600px;
    height: 200px;
    margin: 20px auto;
  }
  .songlist-box {
    width: 100%;
    padding: 0 30px;
    .title {
      position: relative;
      font-size: 18px;
      height: 35px;
      line-height: 35px;
      text-align: left;
    }
    .title::after {
      content: '';
      position: absolute;
      left: 0;
      top: 35px;
      width: 100%;
      height: 0.5px;
      background-color: #E1E1E2;
    }
    .list-block {
      margin-top: 12px;
      width: 100%;
      text-align: left;
      .item-wrapper {
        display: inline-block;
        width: 18%;
        vertical-align: top;
        margin-bottom: 20px;
        .item {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          text-align: center;
          .border {
            border: solid 1px #E1E1E2;
          }
          .item-box {
            position: absolute;
            height: 100%;
            width: 100%;
            .week {
              margin-top: 15px;
              font-size: 16px;
              color: #666666;
            }
            .day {
              font-size: 85px;
              color: #C62F2F;
            }
            img {
              border: none;
            }
            .item-img {
              width: 100%;
              height: 100%;
            }
            .listen-block {
              position: absolute;
              right: 0;
              top: 0;
              color: #ffffff;
              font-size: 12px;
              padding: 5px;
              display: flex;
              align-items: center;
              img {
                width: 12px;
                height: 12px;
                margin-right: 5px;
              }
            }
          }
        }
        .name {
          margin: 5px 0;
          text-align: left;
          color: #333333;
          font-size: 13px;
        }
      }
    }
    .item-wrapper:nth-child(5n+1) {
      margin-right: 2.5%;
    }
    .item-wrapper:nth-child(5n+2) {
      margin-right: 2.5%;
    }
    .item-wrapper:nth-child(5n+3) {
      margin-right: 2.5%;
    }
    .item-wrapper:nth-child(5n+4) {
      margin-right: 2.5%;
    }
  }
}
</style>