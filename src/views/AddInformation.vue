<template>
  <div class="addinformation">
    <div class="content">
      <div class="view_title">添加最新资讯</div>
      <div class="add_body">
        <div class="add_title">
          <div class="tip">标题：</div>
          <Input v-model="addinfo_title" placeholder="输入标题" class="title_input" />
        </div>
        <div class="add_text">
          <div class="tip">写在前面：</div>
          <Input
            v-model="addinfo_textfirst"
            class="text_input"
            type="textarea"
            :autosize="{minRows: 5,maxRows: 5}"
            placeholder="输入写在前面内容"
          />
        </div>
        <div class="add_img">
          <div class="tip">主要图片：</div>
          <el-upload
            class="upload_img"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange1"
            :on-remove="handleRemove2"
            :file-list="main_imglist"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <div class="add_text">
          <div class="tip">第一段内容：</div>
          <Input
            v-model="addinfo_text1"
            class="text_input"
            type="textarea"
            :autosize="{minRows: 5,maxRows: 5}"
            placeholder="输入第一段内容"
          />
        </div>
        <div class="add_text">
          <div class="tip">第二段内容：</div>
          <Input
            v-model="addinfo_text2"
            class="text_input"
            type="textarea"
            :autosize="{minRows: 5,maxRows: 5}"
            placeholder="输入第二段内容"
          />
        </div>
        <div class="add_img">
          <div class="tip">次要图片：</div>
          <el-upload
            class="upload_img"
            action="https://jsonplaceholder.typicode.com/posts/"
            @on-change="handleChange2"
            @on-remove="handleRemove2"
            :file-list="second_imglist"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <div class="add_text">
          <div class="tip">写在最后：</div>
          <Input
            v-model="addinfo_textfinally"
            class="text_input"
            type="textarea"
            :autosize="{minRows: 5,maxRows: 5}"
            placeholder="输入写在最后内容"
          />
        </div>
        <div class="add_text">
          <div class="tip">资讯类型：</div>
          <Select v-model="infotype" style="width:500px;float:left;">
            <Option
              v-for="item in infotypelist"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </div>
        <div class="release">
          <Button type="error" size="large" style="width:200px;height:40px;">发布资讯</Button>
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
      addinfo_title: "",
      addinfo_textfirst: "",
      main_imglist: [],
      addinfo_text1: "",
      addinfo_text2: "",
      second_imglist: [],
      infotypelist:[
        {
          value:1,
          label:"综合"
        },
        {
          value:2,
          label:"赛事"
        },
        {
          value:3,
          label:"攻略"
        },
        {
          value:4,
          label:"社区"
        },
      ],
      infotype:'',
      addinfo_textfinally: ""
    };
  },
  methods: {
    handleChange1(file, filelist) {
      console.log(file, filelist);
    },
    handleRemove1(file, filelist) {
      console.log(file, filelist);
    },
    handleChange2(file, filelist) {
      console.log(file, filelist);
    },
    handleRemove2(file, filelist) {
      console.log(file, filelist);
    }
  }
};
</script>
<style lang="less">
.addinformation {
  .content {
    width: 1000px;
    margin: auto;
    // background-color: #e5e5e5;
    .view_title {
      color: #f61700;
      font-size: 25px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-weight: 700;
      margin: 20px 0;
    }
    .add_body {
      width: 100%;
      .add_title {
        width: 100%;
        height: 50px;
        margin-bottom: 30px;
        padding: 10px 0 0 0;
        .clearfloat();
        .title_input {
          float: left;
          width: 500px;
        }
      }
      .tip {
        float: left;
        width: 300px;
        text-align: right;
        font-size: 18px;
        font-weight: 600;
      }
      .add_text {
        width: 100%;
        // height: 80px;
        margin-bottom: 30px;
        padding: 10px 0 0 0;
        .clearfloat();
        .text_input {
          float: left;
          width: 500px;
        }
      }
      .add_img {
        width: 100%;
        // height: 100px;
        margin-bottom: 30px;
        padding: 10px 0 0 0;
        .upload_img {
          float: left;
          width: 500px;
          min-height: 150px;
        }
      }
      .release {
        width: 100%;
        height: 100px;
        padding: 20px 0;
      }
    }

    .index_footer {
      width: 100%;
      height: 80px;
      margin-top: 50px;
      background-color: #333333;
      font-size: 20px;
      line-height: 80px;
      color: #686868;
      text-align: center;
    }
  }
}
</style>