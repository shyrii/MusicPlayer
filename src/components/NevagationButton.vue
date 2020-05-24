<template>
  <div class="button-wrapper">
    <button class="btn">
      <PrevArrow class="arrow" />
    </button>
    <button class="btn">
      <NextArrow class="arrow"/>
    </button>
  </div>
</template>
<script>
import NextArrow from '../assets/next-arrow.svg';
import PrevArrow from '../assets/prev-arrow.svg';

export default {
  name: 'NevagationButton',
  components: {
    NextArrow,
    PrevArrow
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  display: flex;
  align-items: center;
  .btn {
    width: 28px;
    height: 22px;
    background-color: $theme-color;
    border: 1px solid #A72727;
    outline: none;
  }
  .arrow {
    margin-right: 5px;
    width: 16px;
    height: 16px;
    path {
      fill: #CF8989
    }
  }
}

</style>