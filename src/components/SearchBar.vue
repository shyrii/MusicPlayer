<template>
  <div class="search-wrapper">
    <input type="text" id='searchBarInput' placeholder="搜索音乐，视频，歌词，电台">
    <SearchBarIcon class="search-icon"/>
  </div>
</template>
<script>
import SearchBarIcon from '../assets/search.svg';

export default {
  name: 'SearchBar',
  components: {
    SearchBarIcon
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  width: 220px;
  height: 25px;
  background-color: #A82828;
  border-radius: 10px;
  input {
    background:none;
    outline:none;
    border:0px;
    height: 100%;
    width: 100%;
    padding: 0 10px;
    font-size: 12px;
    color: #e6e6e6;
  }
  .search-icon {
    margin-right: 5px;
    width: 22px;
    height: 20px;
    path {
      fill: #CF8989
    }
  }
  .search-icon:hover {
    cursor: pointer;
    path {
      fill: $header-hover;
    }
  }
}
#searchBarInput::-webkit-input-placeholder {
  color: #C77373;
}
#searchBarInput:-moz-placeholder {
  color: #C77373;
}
#searchBarInput:-ms-input-placeholder {
  color: #C77373;
}
</style>