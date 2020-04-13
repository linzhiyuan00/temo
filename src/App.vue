<template>
  <div id="app">
    <!-- <vue-particles
        class="pagebackground"
        color="#006699"
        :particleOpacity="0.5"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="true"
        clickMode="push"
      /> -->
    <router-view />
  </div>
</template>

<style lang="less">
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #e0e2e2;
  background-image: linear-gradient(to right,#fff,#e0e2e2);
  .pagebackground{
    width: 99%;
    height: 98%;
    position: absolute;
    z-index: -100;
  }
}

#nav {
  padding: 10px 30px;
  background-image: url('assets/game_img/head_bg.png');
  background-size:cover;
  // background-repeat:no-repeat;
  // background-size:100% 100%;
  // background-color: #fff;

  a {
    font-weight: bold;
    font-size: 25px;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #e61700;
    }
  }
}
</style>
