<template>
  <div class="recommend-wrapper">
    <div class="carousel-box"></div>
    <div class="songlist-box">
      <div class="title">推荐歌单</div>
      <div class="list-block">
        <div class="daily-item-wrapper">
          <div class="daily-item">
            <div class="item-box">
              <div class="week">星期一</div>
              <div class="day">25</div>
            </div>
          </div>
          <div class="name">每日歌曲推荐</div>
        </div>
        
        <!-- <div class="song-item"></div> -->
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
          picUrl: 'https://images.app.goo.gl/exHixSp7WcCWRLyK8',
          playcount: 3100,
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
      width: 90%;
      height: 1px;
      background-color: #E1E1E2;
    }
    .list-block {
      display: inline-block;
      margin-top: 12px;
      width: 100%;
      .daily-item-wrapper {
        width: 18%;
        .daily-item {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          .item-box {
            position: absolute;
            height: 100%;
            width: 100%;
            border: solid 0.5px #E1E1E2;
            .week {
              margin-top: 15px;
              font-size: 16px;
              color: #666666;
            }
            .day {
              font-size: 85px;
              color: #C62F2F;
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
      .song-item {
        width: 22%;
        height: 22%;
        border: solid 1px #E1E1E2;
      }
    }
  }
}
</style>