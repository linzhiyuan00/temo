<template>
  <div class="userinfo">
    <div class="content">
      <div class="view_title">个人信息</div>
      <div class="user">
        <div class="info_box" style="height:120px">
          <span>头像：</span>
          <img src="../assets/logo.png" style="width:100px;height:100px" alt="">
        </div>
        <div class="info_box">
          <span>昵称：</span>
          <Input class="info_input" v-model="user.name" placeholder="输入昵称~" :disabled="editinfo" />
        </div>
        <div class="info_box">
          <span>性别：</span>
          <RadioGroup v-model="user.sex" style="float:left" >
            <Radio label="男" :disabled="editinfo"></Radio>
            <Radio label="女" :disabled="editinfo"></Radio>
          </RadioGroup>
        </div>
        <div class="info_box">
          <span>个性签名：</span>
          <Input class="info_input" v-model="user.person_txt" :disabled="editinfo" placeholder="输入个性签名~" />
        </div>
        <div class="info_box">
          <Button v-show="editinfo == true" type="primary" @click="toeditinfo(false)">修改个人信息</Button>
          <Button v-show="editinfo == false" type="primary" @click="toeditinfo(true)">保存信息</Button>
        </div>
        <div class="info_box">
          <Button type="primary" @click="admintype">切换身份</Button>
          <span>{{admin == true ? '管理员' : '普通用户'}}</span>
        </div>
      </div>
      <div class="index_footer">
        <span>我是有底线的</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      admin: false,
      user: {
        name: "张三",
        sex: "",
        person_txt: ""
      },
      editinfo:true
    };
  },
  watch: {
    "$store.state.isadmin": function(data) {
      if (data == true) {
        this.admin = true;
      } else {
        this.admin = false;
      }
    }
  },
  methods: {
    toeditinfo(state){
      this.editinfo = state;
    },
    admintype() {
      if (this.admin == true) {
        this.$store.dispatch("update_isadmin", false);
      } else {
        this.$store.dispatch("update_isadmin", true);
      }
    }
  },
  mounted() {
    if (this.$store.state.isadmin == true) {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }
};
</script>
<style lang="less">
.userinfo {
  .content {
    width: 1000px;
    margin: auto;
    background-color: #e5e5e5;
    .view_title {
      color: #1890ff;
      font-size: 25px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-top: 20px;
    }
    .user {
      width: 100%;
      padding: 20px;
      background-color: #fff;
      .info_box {
        width: 100%;
        height: 60px;
        padding: 10px;
        line-height: 40px;
        font-size: 20px;
        color: #1890ff;
        .clearfloat();
        > span {
          float: left;
          width: 350px;
          text-align: right;
        }
        >img{
          float: left;
          border: solid #e5e5e5 1px;
          // margin: 20px;
        }
        .info_input {
          float: left;
          position: relative;
          top: 4px;
          width: 300px;
        }
      }
    }

    .index_footer {
      width: 100%;
      height: 80px;
      background-color: #333333;
      font-size: 20px;
      line-height: 80px;
      color: #686868;
      text-align: center;
    }
  }
}
</style>