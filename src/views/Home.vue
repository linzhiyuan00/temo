<template>
  <div class="home">
    <TopBar />
    <div class="top_bar"></div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar'
export default {
  name: "Home",
  components: {
   TopBar
  },
};
</script>
<style lang="less">
.top_bar{
  width: 100%;
  height: 80px;
}
</style>
