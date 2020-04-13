<template>
  <div class="topbar">
    <div class="logo">
      <img class="logo_img" src="../assets/login_logo.png" alt />
    </div>
    <div class="classify">
      <router-link class="classifyshop" :class="$route.name == 'Game' ? 'active' :''"  to="/Game">游戏资讯</router-link>
      <router-link class="classifyshop" :class="$route.name == 'Movie' ? 'active' :''"  to="/Movie">电影排行</router-link>
    </div>
    <div class="tologin" v-if="login == false">
      <router-link class="classifyshop" to="/Login">登录</router-link>
    </div>
    <div class="userinfo" v-else>
      <Menu mode="horizontal" theme="light" active-name="1">
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-contact" />用户信息
          </template>
          <MenuItem name="1">
            <router-link class="classifyshop" to="/UserInfo">个人信息</router-link>
          </MenuItem>
          <MenuItem name="2">
            <router-link class="classifyshop" to="/Collect">我的收藏</router-link>
          </MenuItem>
          <MenuItem name="3" v-show="admin == true">
            <router-link class="classifyshop" to="/AddInformation">管理员添加最新资讯</router-link>
          </MenuItem>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: false,
      admin: false
    };
  },
  methods: {
    toCart() {
      this.$router.replace({ name: "Cart" });
    }
  },
  computed: {
  },
  watch: {
    "$store.state.Login": function(data) {
      if (data == true) {
        this.login = true;
      } else {
        this.login = false;
      }
    },
    "$store.state.isadmin": function(data) {
      if (data == true) {
        this.admin = true;
      } else {
        this.admin = false;
      }
    }
  },
  mounted() {
    if (this.$store.state.Login == true) {
      this.login = true;
    } else {
      this.login = false;
    }
    if (this.$store.state.isadmin == true) {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }
};
</script>
<style lang="less">
.topbar {
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 2px solid #e5e5e5;
  .logo {
    width: 180px;
    height: 80px;
    float: left;
    .logo_img {
      padding: 10px 0 0 0;
      width: 160px;
      height: 70px;
      border-radius: 2px;
    }
  }
  .classify {
    float: left;
    width: calc(100vw - 500px);
    height: 80px;
    padding: 20px 0 0 0;
    .classifyshop {
      flex: 1;
      display: inline-block;
      font-size: 30px;
      line-height: 40px;
      height: 58px;
      padding: 0 20px;
      color: #71777c;
      &.active{
        border-bottom: 2px #2d8cf0 solid;
        color: #2d8cf0;
      }
      &:hover {
        border-bottom: 2px #2d8cf0 solid;
      }
    }
  }
  .tologin {
    cursor: pointer;
    font-size: 20px;
    width: 100px;
    height: 80px;
    padding: 25px 0;
    margin-right: 20px;
    line-height: 26px;
    font-weight: 400;
    color: #8195e4;
    float: right;
  }
  .cart {
    cursor: pointer;
    font-size: 20px;
    width: 40px;
    height: 80px;
    padding: 20px 0;
    margin-right: 20px;
    line-height: 26px;
    font-weight: 400;
    color: #8195e4;
    float: right;
  }
  .userinfo {
    position: relative;
    bottom: 10px;
    cursor: pointer;
    font-size: 20px;
    width: 150px;
    height: 80px;
    padding: 25px 0;
    margin-right: 20px;
    line-height: 26px;
    font-weight: 400;
    color: #8195e4;
    float: right;
  }
}
</style>