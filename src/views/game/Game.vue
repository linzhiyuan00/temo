<template>
  <div class="view game">
    <!-- 游戏首页轮播图 -->
    <div class="index_scroll">
      <el-carousel height="400px" arrow="always">
        <el-carousel-item v-for="item in carousel_imglist" :key="item.id">
          <el-image
            style="width: 100%; height: 400px"
            :src="item.src"
            @click="toOffical_page(item.id)"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="game_body">
      <!-- 标签资讯页 -->
      <div class="game_tabs">
        <Tabs v-model="activeName" style="width:400px">
          <TabPane label="综合" name="1">综合</TabPane>
          <TabPane label="公告" name="2">公告</TabPane>
          <TabPane label="赛事" name="3">赛事</TabPane>
          <TabPane label="攻略" name="4">攻略</TabPane>
          <TabPane label="社区" name="5">社区</TabPane>
        </Tabs>
      </div>
      <div class="game_information"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "game",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      carousel_imglist: [
        {
          src: require("../../assets/game_img/carimg_1.png"),
          id: 1
        },
        {
          src: require("../../assets/game_img/carimg_2.png"),
          id: 2
        },
        {
          src: require("../../assets/game_img/carimg_3.png"),
          id: 3
        },
        {
          src: require("../../assets/game_img/carimg_4.png"),
          id: 4
        },
        {
          src: require("../../assets/game_img/carimg_5.png"),
          id: 5
        }
      ],
      activeName: "1"
    };
  },
  methods: {
    toOffical_page(num) {
      switch (num) {
        case 1:
          window.open(
            "https://lol.qq.com/news/detail.shtml?docid=15060710663350700956&e_code=505410&idataid=300192"
          );
          break;
        case 2:
          window.open(
            "https://lol.qq.com/act/a20200217bloodmoon/index.html?e_code=500131&idataid=300193"
          );
          break;
        case 3:
          window.open(
            "https://lol.qq.com/act/a20200207valentine/index.html?e_code=500132&idataid=300130"
          );
          break;
        case 4:
          window.open(
            "https://lol.qq.com/act/a20171205hextech/?e_code=500133&idataid=300224"
          );
          break;
        case 5:
          window.open(
            "https://lol.qq.com/act/a20200217clash/index.html?e_code=505539&idataid=300289"
          );
          break;
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less">
.game {
  .clearfloat();
  .index_scroll {
    width: 1200px;
    height: 400px;
  }
  .game_body {
    width: 100%;
    padding: 20px 50px;
    .clearfloat();
    .game_tabs {
      float: left;
      width: 500px;
      height: 340px;
    }
    .game_information {
      float: left;
      width: 600px;
      height: 5000px;
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
