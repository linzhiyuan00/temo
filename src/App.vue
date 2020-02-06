<template>
  <div id="app">
    <vue-particles
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
      >
      </vue-particles>
    <div id="nav">
      <router-link to="/movie">影视</router-link> |
      <router-link to="/">游戏</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
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
  .pagebackground{
    margin-left: 5%;
    margin-top: 5%;
    width: 90%;
    height: 90%;
    position: absolute;
    z-index: -100;
  }
}

#nav {
  padding: 10px 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
