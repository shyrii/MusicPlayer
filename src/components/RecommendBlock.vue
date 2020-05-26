<template>
  <div class="recommend-wrapper">
    <!-- <div class="carousel-box" :style="{backgroundImage: `url(${banners[0].imageUrl})`}"></div> -->
    <div class="carousel-box">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide :style="{backgroundImage: `url(${item.imageUrl})`}" v-for="item in banners" :key="item.imageUrl"></swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div>
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
              <img :src="item.picUrl" class="item-img"/>
              <div class="listen-block">
                <img src="../assets/headset.png"/>
                <span>{{ item.playCount }}</span>
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
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import urls from '../apis/urls'

export default {
  name: 'RecommendBlock',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      recommend: [],
      banners: [],
      swiperOption: {
        effect: 'coverflow',
        loop: true,
        autoplay: {
          delay: 1000,//1秒切换一次
        },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted() {
    this.getRecommend();
    this.getBanner();
  },
  methods: {
    async getBanner() {
      const res = await this.axios({
        methods: 'get',
        url: urls.banner,
      })
      if (res.data.code === 200) {
        this.banners = res.data.banners;
      }
    },
    async getRecommend() {
      const res = await this.axios({
        methods: 'get',
        url: urls.personalized,
      })
      if (res.data.code === 200) {
        this.recommend = res.data.result;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.recommend-wrapper {
  width: 100%;
  .carousel-box {
    width: 100%;
    height: auto;
    padding: 20px 30px;

    .swiper {
      height: 100%;
      width: 100%;
      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        /* height: 200px; */
        padding-bottom: 18.52%;
        text-align: center;
        background-position: center;
        background-size: cover;
      }
    }
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