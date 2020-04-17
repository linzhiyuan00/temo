<template>
  <div class="view info">
    <div class="info_body">
      <div class="movie_maininfo">
        <div class="movie_info_img">
          <img :src="Movie_info.images.large" alt style="width:300px;height:460px;" />
        </div>
        <div class="movie_info">
          <div class="text_title">
            {{Movie_info.title}}
          </div>
          <div class="text_box">
            <span class="text_tip">导演：</span>
            <span class="text_info">{{main_actor(Movie_info.directors)}}</span>
          </div>
          <div class="text_box">
            <span class="text_tip">编剧：</span>
            <span class="text_info">{{main_actor(Movie_info.writers)}}</span>
          </div>
          <div class="text_box">
            <span class="text_tip">主演：</span>
            <span class="text_info">{{main_actor(Movie_info.casts)}}</span>
          </div>
          <div class="text_box">
            <span class="text_tip">类型：</span>
            <span class="text_info">{{main_txt(Movie_info.genres)}}</span>
          </div>
          <div class="text_box">
            <span class="text_tip">制片国家/地区：</span>
            <span class="text_info">{{main_txt(Movie_info.countries)}}</span>
          </div>
          <div class="text_box">
            <span class="text_tip">语言：</span>
            <span class="text_info">{{main_txt(Movie_info.languages)}}</span>
          </div>
          <div class="text_box" >
            <span class="text_tip">上映时间：</span>
            <span class="text_info">{{Movie_info.pubdate}}</span>
          </div>
          <div class="text_box">
            <span class="text_tip">片长：</span>
            <span class="text_info">{{main_txt(Movie_info.durations) || "-"}}</span>
          </div>
          <div class="text_box">
            <span class="text_tip">又名：</span>
            <span class="text_info">{{main_txt(Movie_info.aka) || "-"}}</span>
          </div>
          <div class="text_box">
            <span class="text_tip">标签：</span>
            <span class="text_info">{{main_txt(Movie_info.tags)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Movie_info: {
        title:"",
        directors:[],
        writers:[],
        casts:[],
        genres:[],
        countries:[],
        languages:[],
        pubdate:"",
        durations:[],
        aka:[],
        tags:[],
        images:{
          large:""
        }
      }
    };
  },
  methods: {
    main_actor(arr) {
      let result = "";
      if(arr !== [] || arr.length !== 0){
        for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
          result += arr[i].name;
        } else {
          result += "/" + arr[i].name;
        }
      }
      }
      return result;
    },
    main_txt(arr) {
      let result = "";
      if(arr !== [] || arr.length !== 0){
        for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
          result += arr[i];
        } else {
          result += "/" + arr[i];
        }
      }
      }
      
      return result;
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.$axios
      .get(
        `/douban/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`
      )
      .then(res => {
        this.Movie_info = res.data;
      });
  }
};
</script>
<style lang="less">
.info {
  .info_body {
    .movie_maininfo {
      // height: 800px;
      width: 1100px;
      margin: 0 50px 30px 50px;
      padding: 20px;
      border: 1px solid #e5e5e5;
      .clearfloat();
      .movie_info_img {
        float: left;
        width: 400px;
        height: 100%;
        padding: 50px;
      }
      .movie_info {
        float: left;
        width: 650px;
        height: 100%;
        padding: 0 70px 70px 70px;
        .text_title{
          font-size: 25px;
          color: #f61700;
          height: 70px;
          line-height: 50px;
          padding:  0 0 20px 0;
        }
        .text_box {
          padding: 5px 30px;
          line-height: 30px;
          text-align: left;
          width: 400px;
          .text_tip {
            font-size: 13px;
            color: #666666;
          }
          .text_info {
            color: #3377aa;
          }
        }
      }
    }
  }
}
</style>