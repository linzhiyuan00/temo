<template>
  <div class="view info">
    <div class="info_body">
      <div class="movie_maininfo">
        <div class="movie_info_img">
          <img :src="getImages(Movie_info.images.large)" alt style="width:300px;height:460px;" />
        </div>
        <div class="movie_info">
          <div class="text_title">{{Movie_info.title}}</div>
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
          <div class="text_box">
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
      <div class="movie_more">
        <div class="rating">
          <span>豆瓣评分：</span>
          <Rate style="position:relative;bottom:3px;" allow-half disabled v-model="rating" />
          <span style="color:#f5a623;font-size:18px;margin-left:10px;">{{Movie_info.rating.average}}</span>
        </div>
        <div class="summary">
          <div class="summary_tip">剧情简介：</div>
          <div class="summary_content">{{Movie_info.summary}}</div>
        </div>
        <div class="comment">
          <div class="comment_tip">精彩短评：</div>
          <div class="comment_list">
            <div class="comment_box" v-for=" item in Movie_info.popular_comments" :key="item.id">
              <div>
                <span style="color:#666699;margin-right:20px;">{{item.author.name}}</span>
                <span>
                  <Rate allow-half disabled v-model="item.rating.value" />
                </span>
                <span style="color:#aaa;margin-left:20px;">{{item.created_at}}</span>
              </div>
              <div style="padding:10px 20px;">{{item.content}}</div>
            </div>
          </div>
        </div>
        <div class="comment">
          <div class="comment_tip">精彩影评：</div>
          <div  class="comment_list">
            <div class="comment_box" v-for=" item in Movie_info.popular_reviews" :key="item.id">
              <div>
                <span style="color:#666699;margin-right:20px;">{{item.author.name}}</span>
                <span>
                  <Rate allow-half disabled v-model="item.rating.value" />
                </span>
                <span style="color:#aaa;margin-left:20px;">{{item.created_at}}</span>
              </div>
              <div style="color:#666699;font-size:15px;">{{item.title}}</div>
              <div style="padding:10px 20px;">{{item.summary}}</div>
            </div>
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
        title: "",
        directors: [],
        writers: [],
        casts: [],
        genres: [],
        countries: [],
        languages: [],
        pubdate: "",
        durations: [],
        aka: [],
        tags: [],
        images: {
          large: ""
        },
        rating:{
          average:0
        }
      },
      rating: 0
    };
  },
  methods: {
    main_actor(arr) {
      let result = "";
      if (arr !== [] || arr.length !== 0) {
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
      if (arr !== [] || arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
          if (i == 0) {
            result += arr[i];
          } else {
            result += "/" + arr[i];
          }
        }
      }

      return result;
    },
    // 解决403图片缓存问题
    getImages(_url) {
      if (_url !== undefined) {
        let _u = _url.substring(7);
        return "https://images.weserv.nl/?url=" + _u;
      }
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
        this.rating = this.Movie_info.rating.average / 2;
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
        .text_title {
          font-size: 25px;
          color: #f61700;
          height: 70px;
          line-height: 50px;
          padding: 0 0 20px 0;
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
    .movie_more {
      width: 1100px;
      margin: 20px 50px 30px 50px;
      padding: 20px;
      border: 1px solid #e5e5e5;
      .rating {
        width: 100%;
        height: 80px;
        padding: 15px 0 0 0;
        > span {
          color: #9b9b9b;
          font-size: 20px;
        }
      }
      .summary {
        width: 100%;
        padding: 30px 0;
        .clearfloat();
        .summary_tip {
          float: left;
          width: 100px;
          color: #9b9b9b;
          font-size: 17px;
        }
        .summary_content {
          float: left;
          margin-left: 40px;
          width: 900px;
          font-size: 14px;
          color: #000000;
        }
      }
      .comment {
        width: 100%;
        .clearfloat();
        .comment_tip {
          float: left;
          width: 100px;
          color: #9b9b9b;
          font-size: 17px;
        }
        .comment_list {
          width: 900px;
          margin-left: 40px;
          float: left;
          .comment_box {
            min-height: 100px;
            padding:10px 0;
            width: 100%;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>