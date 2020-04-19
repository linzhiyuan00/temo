<template>
  <div class="view movie">
    <div class="movie_body">
      <div class="classify_title">正在热播...</div>
      <div class="movie_information">
        <div
          class="information_box"
          v-for="item of hotplay_list"
          :key="item.id"
          @click="to_info(item)"
        >
          <div class="information_mainimg">
            <img :src="getImages(item.images.large)" alt style="width: 140px;height: 200px;" />
          </div>
          <div class="information_info">
            <div class="movie_title">{{item.title}}</div>
            <div class="info_box">
              <span class="movie_tip">主演：</span>
              <span class="movie_txt">{{main_actor(item.casts)}}</span>
            </div>
            <div class="info_box">
              <span class="movie_tip">导演：</span>
              <span class="movie_txt">{{main_actor(item.directors)}}</span>
            </div>
            <div class="info_box">
              <span class="movie_tip">类型：</span>
              <span class="movie_txt">{{main_txt(item.genres)}}</span>
            </div>
            <div class="info_box">
              <span class="movie_tip">上映日期：</span>
              <span class="movie_txt">{{item.mainland_pubdate}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="classify_title">即将上映...</div>
      <div class="movie_information">
        <div
          class="information_box"
          v-for="item of comingplay_list"
          :key="item.id"
          @click="to_info(item)"
        >
          <div class="information_mainimg">
            <img :src="getImages(item.images.large)" alt style="width: 140px;height: 200px;" />
          </div>
          <div class="information_info">
            <div class="movie_title">{{item.title}}</div>
            <div class="info_box">
              <span class="movie_tip">主演：</span>
              <span class="movie_txt">{{main_actor(item.casts)}}</span>
            </div>
            <div class="info_box">
              <span class="movie_tip">导演：</span>
              <span class="movie_txt">{{main_actor(item.directors)}}</span>
            </div>
            <div class="info_box">
              <span class="movie_tip">类型：</span>
              <span class="movie_txt">{{main_txt(item.genres)}}</span>
            </div>
            <div class="info_box">
              <span class="movie_tip">上映日期：</span>
              <span class="movie_txt">{{item.mainland_pubdate}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="classify_title">TOP250...</div>
      <div class="movie_information">
        <div
          class="information_box"
          v-for="item of top250_list"
          :key="item.id"
          @click="to_info(item)"
        >
          <div class="information_mainimg">
            <img :src="getImages(item.images.large)" alt style="width: 140px;height: 200px;" />
          </div>
          <div class="information_info">
            <div class="movie_title">{{item.title}}</div>
            <div class="info_box">
              <span class="movie_tip">主演：</span>
              <span class="movie_txt">{{main_actor(item.casts)}}</span>
            </div>
            <div class="info_box">
              <span class="movie_tip">导演：</span>
              <span class="movie_txt">{{main_actor(item.directors)}}</span>
            </div>
            <div class="info_box">
              <span class="movie_tip">类型：</span>
              <span class="movie_txt">{{main_txt(item.genres)}}</span>
            </div>
            <div class="info_box">
              <span class="movie_tip">上映日期：</span>
              <span class="movie_txt">{{item.mainland_pubdate}}</span>
            </div>
          </div>
        </div>
      </div>
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
      hotplay_list: [],
      comingplay_list: [],
      top250_list: []
    };
  },
  methods: {
    to_info(item) {
      this.$router.push({name:'Movie_info',params:{id:item.id}});
    },
    main_actor(arr) {
      let result = "";
      for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
          result += arr[i].name;
        } else {
          result += "/" + arr[i].name;
        }
      }
      return result;
    },
    main_txt(arr) {
      let result = "";
      for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
          result += arr[i];
        } else {
          result += "/" + arr[i];
        }
      }
      return result;
    },
    // 解决403图片缓存问题
    getImages( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 7 );
        return 'https://images.weserv.nl/?url=' + _u;
      }
    }
  },
  mounted() {
    this.$axios
      .get(
        "/douban/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10"
      )
      .then(res => {
        if (res.status == 200) {
          this.hotplay_list = JSON.parse(JSON.stringify(res.data.subjects));
        }
      });

    this.$axios
      .get(
        "/douban/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10"
      )
      .then(res => {
        if (res.status == 200) {
          this.top250_list = JSON.parse(JSON.stringify(res.data.subjects));
        }
      });

    this.$axios
      .get(
        "/douban/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=5"
      )
      .then(res => {
        if (res.status == 200) {
          this.comingplay_list = JSON.parse(JSON.stringify(res.data.subjects));
        }
      });
  }
};
</script>
<style lang="less">
.movie {
  .clearfloat();
  .movie_body {
    width: 100%;
    padding: 20px 50px;
    .clearfloat();
    .classify_title {
      width: 1100px;
      height: 80px;
      padding: 0 20px;
      margin: 0 50px;
      font-size: 30px;
      color: #f61700;
      text-align: left;
      line-height: 80px;
      border-bottom: #f61700 solid 2px;
    }
    .movie_information {
      width: 950px;
      margin-left: 150px;
      .information_box {
        margin: 20px 20px 50px 20px;
        width: 760px;
        height: 250px;
        padding: 10px 30px;
        background-color: #fff;
        border: solid 2px #f4f5f5;
        &:hover {
          box-shadow: 0px 1px 5px #1798fc;
        }
        .clearfloat();
        .information_info {
          padding: 15px 30px;
          height: 230px;
          width: 530px;
          float: left;
          .movie_tip {
            font-size: 13px;
            color: #666666;
          }
          .movie_txt {
            color: #3377aa;
          }
          .movie_title {
            height: 40px;
            padding: 5px 20px;
            font-size: 20px;
            color: #909090;
            font-weight: 600;
          }
          .info_box {
            height: 40px;
            padding: 5px 30px;
            line-height: 30px;
            text-align: left;
          }
        }
        .information_mainimg {
          margin: 15px 10px;
          float: left;
          width: 140px;
          height: 200px;
          background-size: cover;
        }
      }
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
