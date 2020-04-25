<template>
  <div class="view info">
    <div class="info_body">
      <Anchor show-ink  style="position:fixed;top:200px;left:50px;">
        <AnchorLink href="#biaoti" title="标题" />
        <AnchorLink href="#neirong" title="内容" />
        <AnchorLink href="#pinglun" title="评论" />
    </Anchor>
      <div class="information_title" id="biaoti">
        <img
          class="collectimg"
          v-show="collect == false"
          title="点击收藏"
          @click="tocollect(true)"
          src="../assets/uncollect.png"
          alt
        />
        <img
          class="collectimg"
          title="取消收藏"
          @click="tocollect(false)"
          v-show="collect == true"
          src="../assets/collected.png"
          alt
        />
        {{information_info.title}}
        <span class="collecttip">收藏数：{{collectnum}}</span>
      </div>
      <p class="first_text_box info_text">{{information_info.first_text}}</p>
      <div class="main_img_box info_img">
        <img :src="information_info.main_img" alt />
      </div>
      <p class="second_text_box info_text" id="neirong">{{information_info.second_text}}</p>
      <p class="third_text_box info_text">{{information_info.third_text}}</p>
      <div class="second_img_box info_img">
        <img :src="information_info.second_img" alt />
      </div>
      <p class="finally_text_box info_text" >{{information_info.finally_text}}</p>
      <div class="comment" id="pinglun">
        <div class="edit_comment">
          <Input type="textarea" :autosize="{minRows: 3,maxRows: 6}"  v-model="mycomment" placeholder="写下你的评论吧~"/>
          <Button type="primary" style="margin:20px" @click="editcomment">评论</Button>
        </div>
        <div class="commentlist" >
          <div class="comment_tip">评论列表：</div>
          <div class="comment_box" v-for=" item in comment_list" :key="item.autherid">
            <div>
              <span style="color:#666699;margin-right:20px;">{{item.authername}}</span>
              <span style="color:#aaa;margin-left:20px;">{{item.created_at}}</span>
            </div>
            <div style="padding:10px 20px;">{{item.content}}</div>
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
      information_info: {
        id: 1,
        title: "孙悟空大战葫芦娃",
        first_text:
          "勒尔·乔治·S·巴顿在不经意间这样说过，接受挑战，就可以享受胜利的喜悦。这似乎解答了我的疑惑。 杰纳勒尔·乔治·S·巴顿说过一句富有哲理的话，接受挑战，就可以享受胜利的喜悦。这启发了我， 孙悟空大战葫芦娃，发生了会如何，不发生又会如何。 每个人都不得不面对这些问题。 在面对这种问题时， 而这些并不是完全重要，更加重要的问题是， 从这个角度来看， 我认为， 富兰克林说过一句富有哲理的话，读书是易事，思索是难事，但两者缺一，便全无用处。这似乎解答了我的疑惑。 了解清楚孙悟空大战葫芦娃到底是一种怎么样的存在，是解决一切问题的关键。 一般来说， 既然如此， 那么， 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 孙悟空大战葫芦娃的发生，到底需要如何做到，不孙悟空大战葫芦娃的发生，又会如何产生。 可是，即使是这样，孙悟空大战葫芦娃的出现仍然代表了一定的意义。 爱尔兰在不经意间这样说过，越是无能的人，越喜欢挑剔别人的错儿。我希望诸位也能好好地体会这句话。 孙悟空大战葫芦娃的发生，到底需要如何做到，不孙悟空大战葫芦娃的发生，又会如何产生。 总结的来说， 所谓孙悟空大战葫芦娃，关键是孙悟空大战葫芦娃需要如何写。 斯宾诺莎曾经说过，最大的骄傲于最大的自卑都表示心灵的最软弱无力。这似乎解答了我的疑惑。 爱迪生曾经提到过，失败也是我需要的，它和成功对我一样有价值。带着这句话，我们还要更加慎重的审视这个问题： 裴斯泰洛齐在不经意间这样说过，今天应做的事没有做，明天再早也是耽误了。这句话语虽然很短，但令我浮想联翩。 既然如何， 生活中，若孙悟空大战葫芦娃出现了，我们就不得不考虑它出现了的事实。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 生活中，若孙悟空大战葫芦娃出现了，我们就不得不考虑它出现了的事实。",
        main_img: require("../assets/game_img/carimg_1.png"),
        second_text:
          "这样看来， 生活中，若孙悟空大战葫芦娃出现了，我们就不得不考虑它出现了的事实。 经过上述讨论， 我认为， 就我个人来说，孙悟空大战葫芦娃对我的意义，不能不说非常重大。 那么， 笛卡儿在不经意间这样说过，我的努力求学没有得到别的好处，只不过是愈来愈发觉自己的无知。这启发了我， 一般来说， 那么， 我认为， 每个人都不得不面对这些问题。 在面对这种问题时， 就我个人来说，孙悟空大战葫芦娃对我的意义，不能不说非常重大。 就我个人来说，孙悟空大战葫芦娃对我的意义，不能不说非常重大。 要想清楚，孙悟空大战葫芦娃，到底是一种怎么样的存在。 总结的来说， 而这些并不是完全重要，更加重要的问题是， 总结的来说， 带着这些问题，我们来审视一下孙悟空大战葫芦娃。 可是，即使是这样，孙悟空大战葫芦娃的出现仍然代表了一定的意义。 既然如何， 经过上述讨论， 经过上述讨论， 孙悟空大战葫芦娃，发生了会如何，不发生又会如何。 可是，即使是这样，孙悟空大战葫芦娃的出现仍然代表了一定的意义。 在这种困难的抉择下，本人思来想去，寝食难安。 所谓孙悟空大战葫芦娃，关键是孙悟空大战葫芦娃需要如何写。 对我个人而言，孙悟空大战葫芦娃不仅仅是一个重大的事件，还可能会改变我的人生。 总结的来说， 这样看来， 我们不得不面对一个非常尴尬的事实，那就是， 阿卜·日·法拉兹在不经意间这样说过，学问是异常珍贵的东西，从任何源泉吸收都不可耻。这启发了我， 生活中，若孙悟空大战葫芦娃出现了，我们就不得不考虑它出现了的事实。 总结的来说， 孙悟空大战葫芦娃，到底应该如何实现。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 那么， 所谓孙悟空大战葫芦娃，关键是孙悟空大战葫芦娃需要如何写。 每个人都不得不面对这些问题。 在面对这种问题时， 我认为， 就我个人来说，孙悟空大战葫芦娃对我的意义，不能不说非常重大。 我认为， 那么， 了解清楚孙悟空大战葫芦娃到底是一种怎么样的存在，是解决一切问题的关键。 生活中，若孙悟空大战葫芦娃出现了，我们就不得不考虑它出现了的事实。 从这个角度来看， 孙悟空大战葫芦娃，到底应该如何实现。 达尔文说过一句富有哲理的话，敢于浪费哪怕一个钟头时间的人，说明他还不懂得珍惜生命的全部价值。这不禁令我深思。 我们不得不面对一个非常尴尬的事实，那就是， 总结的来说， 每个人都不得不面对这些问题。 在面对这种问题时， 易卜生曾经提到过，伟大的事业，需要决心，能力，组织和责任感。带着这句话，我们还要更加慎重的审视这个问题： 既然如何， 要想清楚，孙悟空大战葫芦娃，到底是一种怎么样的存在。 而这些并不是完全重要，更加重要的问题是， 既然如此， 了解清楚孙悟空大战葫芦娃到底是一种怎么样的存在，是解决一切问题的关键。 要想清楚，孙悟空大战葫芦娃，到底是一种怎么样的存在。 孙悟空大战葫芦娃，到底应该如何实现。",
        third_text:
          "吉格·金克拉在不经意间这样说过，如果你能做梦，你就能实现它。带着这句话，我们还要更加慎重的审视这个问题： 现在，解决孙悟空大战葫芦娃的问题，是非常非常重要的。 所以， 可是，即使是这样，孙悟空大战葫芦娃的出现仍然代表了一定的意义。 问题的关键究竟为何？ 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 我们不得不面对一个非常尴尬的事实，那就是， 孙悟空大战葫芦娃，到底应该如何实现。 在这种困难的抉择下，本人思来想去，寝食难安。 卡耐基在不经意间这样说过，一个不注意小事情的人，永远不会成就大事业。这启发了我， 生活中，若孙悟空大战葫芦娃出现了，我们就不得不考虑它出现了的事实。",
        second_img: require("../assets/game_img/carimg_3.png"),
        finally_text:
          "那么， 查尔斯·史考伯曾经说过，一个人几乎可以在任何他怀有无限热忱的事情上成功。 带着这句话，我们还要更加慎重的审视这个问题： 现在，解决孙悟空大战葫芦娃的问题，是非常非常重要的。 所以， 孙悟空大战葫芦娃因何而发生？ 每个人都不得不面对这些问题。 在面对这种问题时， 带着这些问题，我们来审视一下孙悟空大战葫芦娃。 可是，即使是这样，孙悟空大战葫芦娃的出现仍然代表了一定的意义。 可是，即使是这样，孙悟空大战葫芦娃的出现仍然代表了一定的意义。 孙悟空大战葫芦娃，到底应该如何实现。 问题的关键究竟为何？ 现在，解决孙悟空大战葫芦娃的问题，是非常非常重要的。 所以， 每个人都不得不面对这些问题。 在面对这种问题时， 就我个人来说，孙悟空大战葫芦娃对我的意义，不能不说非常重大。 杰纳勒尔·乔治·S·巴顿曾经说过，接受挑战，就可以享受胜利的喜悦。我希望诸位也能好好地体会这句话。 孙悟空大战葫芦娃，到底应该如何实现。 每个人都不得不面对这些问题。 在面对这种问题时， 孙悟空大战葫芦娃因何而发生？ 黑塞在不经意间这样说过，有勇气承担命运这才是英雄好汉。这不禁令我深思。 孙悟空大战葫芦娃的发生，到底需要如何做到，不孙悟空大战葫芦娃的发生，又会如何产生。"
      },
      collect: true,
      collectnum: 36,
      comment_list:[
        {
          autherid:1,
          authername:'小杰瑞',
          created_at:"2020-01-10 03:20:36",
          content:"电影完全可以用FBI的角度去讲述一个激进的胖子是如何成为炸弹嫌犯，伪造英雄事迹，被千夫所指，结尾抓到真正罪犯啪啪啪打脸各种官员媒体。这个故事也会变成“爆款”、“必看”、“神作”。然而老爷子没有这么拍，因为他根本不屌这些，这才是东木的魅力"
        },
        {
          autherid:2,
          authername:'小杰瑞',
          created_at:"2020-01-10 03:20:36",
          content:"电影完全可以用FBI的角度去讲述一个激进的胖子是如何成为炸弹嫌犯，伪造英雄事迹，被千夫所指，结尾抓到真正罪犯啪啪啪打脸各种官员媒体。这个故事也会变成“爆款”、“必看”、“神作”。然而老爷子没有这么拍，因为他根本不屌这些，这才是东木的魅力"
        },
        {
          autherid:3,
          authername:'小杰瑞',
          created_at:"2020-01-10 03:20:36",
          content:"电影完全可以用FBI的角度去讲述一个激进的胖子是如何成为炸弹嫌犯，伪造英雄事迹，被千夫所指，结尾抓到真正罪犯啪啪啪打脸各种官员媒体。这个故事也会变成“爆款”、“必看”、“神作”。然而老爷子没有这么拍，因为他根本不屌这些，这才是东木的魅力"
        },
        {
          autherid:4,
          authername:'小杰瑞',
          created_at:"2020-01-10 03:20:36",
          content:"电影完全可以用FBI的角度去讲述一个激进的胖子是如何成为炸弹嫌犯，伪造英雄事迹，被千夫所指，结尾抓到真正罪犯啪啪啪打脸各种官员媒体。这个故事也会变成“爆款”、“必看”、“神作”。然而老爷子没有这么拍，因为他根本不屌这些，这才是东木的魅力"
        },
        {
          autherid:5,
          authername:'小杰瑞',
          created_at:"2020-01-10 03:20:36",
          content:"电影完全可以用FBI的角度去讲述一个激进的胖子是如何成为炸弹嫌犯，伪造英雄事迹，被千夫所指，结尾抓到真正罪犯啪啪啪打脸各种官员媒体。这个故事也会变成“爆款”、“必看”、“神作”。然而老爷子没有这么拍，因为他根本不屌这些，这才是东木的魅力"
        },
        {
          autherid:6,
          authername:'小杰瑞',
          created_at:"2020-01-10 03:20:36",
          content:"电影完全可以用FBI的角度去讲述一个激进的胖子是如何成为炸弹嫌犯，伪造英雄事迹，被千夫所指，结尾抓到真正罪犯啪啪啪打脸各种官员媒体。这个故事也会变成“爆款”、“必看”、“神作”。然而老爷子没有这么拍，因为他根本不屌这些，这才是东木的魅力"
        },
        {
          autherid:7,
          authername:'小杰瑞',
          created_at:"2020-01-10 03:20:36",
          content:"电影完全可以用FBI的角度去讲述一个激进的胖子是如何成为炸弹嫌犯，伪造英雄事迹，被千夫所指，结尾抓到真正罪犯啪啪啪打脸各种官员媒体。这个故事也会变成“爆款”、“必看”、“神作”。然而老爷子没有这么拍，因为他根本不屌这些，这才是东木的魅力"
        },
        {
          autherid:8,
          authername:'小杰瑞',
          created_at:"2020-01-10 03:20:36",
          content:"电影完全可以用FBI的角度去讲述一个激进的胖子是如何成为炸弹嫌犯，伪造英雄事迹，被千夫所指，结尾抓到真正罪犯啪啪啪打脸各种官员媒体。这个故事也会变成“爆款”、“必看”、“神作”。然而老爷子没有这么拍，因为他根本不屌这些，这才是东木的魅力"
        },
        
      ],
      mycomment:""
    };
  },
  methods: {
    tocollect(state) {
      this.collect = state;
      if (state == true) {
        this.$Message.success("收藏成功！");
        this.collectnum += 1;
      } else {
        this.$Message.error("取消成功！");
        this.collectnum -= 1;
      }
    },
    editcomment(){
      if(this.mycomment == ''){
        this.$Message.error('评论不能为空！');
        return;
      }else{
        this.$Message.success('评论成功！');
      }
      
    }
  }
};
</script>
<style lang="less">
.info {
  .info_body {
    .info_text {
      line-height: 26px;
      color: #2b2b2b;
      margin: 20px 70px;
      letter-spacing: 2px;
      font-size: 14px;
      word-spacing: 2px;
      text-align: left;
      text-indent: 2em;
      padding-bottom: 10px;
    }
    .info_img {
      margin: 30px 70px;
    }
    .information_title {
      width: 100%;
      height: 150px;
      padding: 50px;
      font-size: 30px;
      font-weight: 700;
      .collectimg {
        float: left;
        width: 50px;
        height: 50px;
        cursor: pointer;
      }
      .collecttip {
        float: right;
        margin-right: 50px;
        font-size: 15px;
        line-height: 50px;
        color: #71777c;
      }
    }
    .comment {
      width: 100%;
      padding: 50px 0;
      border-top: solid #e5e5e5 2px;
      .comment_tip{
          width: 100px;
          color: #9b9b9b;
          font-size: 17px;
          margin-bottom: 20px;
        }
      .edit_comment {
        width: 100%;
        height: 150px;
      }
      .commentlist {
        width: 1000px;
        margin-left: 40px;
        float: left;
        .comment_box {
          min-height: 100px;
          padding: 10px 0;
          margin: 0 0 0 50px;
          width: 100%;
          text-align: left;
          border-bottom: solid #e5e5e5 1px;
        }
      }
    }
  }
}
</style>