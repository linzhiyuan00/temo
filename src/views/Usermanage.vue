<template>
  <div class="usermanage">
    <div class="content">
      <div class="view_title">用户管理</div>
      <div class="usertable">
        <Table border :columns="columns12" :data="data6" height="500">
          <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
          </template>
          <template slot-scope="{ row }" slot="permission">
            {{ row.permission == 0 ? '管理员' :'普通用户'}}
          </template>
          <template slot-scope="{ row,column, index }" slot="action">
            <Button
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="editaccount(row)"
            >编辑</Button>
            <Button type="error" size="small" @click="remove(index)">删除</Button>
          </template>
        </Table>
      </div>
    </div>

    <!-- 编辑 新增用户 -->
    <Modal
      v-model="accountModal.show"
      :title="accountModal.type"
      width="500"
      class-name="accountmodel"
      @on-ok="accountok"
      ok-text="保存"
      @on-cancel="acountcancel"
    >
      <div class="row_box">
        <div class="row_tip">用户ID：</div>
        <Input class="row_input" v-model="user.id" placeholder="输入昵称~" />
      </div>
      <div class="row_box">
        <div class="row_tip">昵称：</div>
        <Input class="row_input" v-model="user.name" placeholder="输入昵称~" />
      </div>
      <div class="row_box">
        <div class="row_tip">性别：</div>
        <RadioGroup v-model="user.sex" style="float:left">
          <Radio label="男"></Radio>
          <Radio label="女"></Radio>
        </RadioGroup>
      </div>
      <div class="row_box">
        <div class="row_tip">权限：</div>
        <Select v-model="user.permission" style="width:300px;float:left;">
          <Option
            v-for="item in permissionlist"
            :value="item.value"
            :key="item.value"
          >{{ item.label }}</Option>
        </Select>
      </div>
      <div class="row_box">
        <div class="row_tip">个性签名：</div>
        <Input class="row_input" v-model="user.persontxt" placeholder="输入个性签名~" />
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      admin: false,
      permissionlist: [
        {
          value: 1,
          label: "普通用户"
        },
        {
          value: 0,
          label: "管理员"
        }
      ],
      columns12: [
        {
          title: "用户ID",
          key: "id",
          width: 100
        },
        {
          title: "昵称",
          slot: "name",
          width: 200
        },
        {
          title: "性别",
          key: "sex",
          width: 100
        },
        {
          title: "权限",
          slot: "permission",
          width: 150
        },
        {
          title: "个性签名",
          key: "persontxt"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data6: [
        {
          id: 1,
          name: "John Brown",
          sex: "女",
          permission: 1,
          persontxt: "New York No. 1 Lake Park"
        },
        {
          id: 2,
          name: "Jim Green",
          sex: "男",
          permission: 0,
          persontxt: "London No. 1 Lake Park"
        },
        {
          id: 3,
          name: "Joe Black",
          sex: "男",
          permission: 0,
          persontxt: "Sydney No. 1 Lake Park"
        },
        {
          id: 4,
          name: "Jon Snow",
          sex: "女",
          permission: 0,
          persontxt: "Ottawa No. 2 Lake Park"
        },
        {
          id: 5,
          name: "John Brown",
          sex: "男",
          permission: 0,
          persontxt: "New York No. 1 Lake Park"
        },
        {
          id: 6,
          name: "Jim Green",
          sex: "女",
          permission: 0,
          persontxt: "London No. 1 Lake Park"
        },
        {
          id: 7,
          name: "Joe Black",
          sex: "男",
          permission: 0,
          persontxt: "Sydney No. 1 Lake Park"
        },
        {
          id: 8,
          name: "Jon Snow",
          sex: "女",
          permission: 0,
          persontxt: "Ottawa No. 2 Lake Park"
        },
        {
          id: 9,
          name: "John Brown",
          sex: "男",
          persontxt: "New York No. 1 Lake Park"
        },
        {
          id: 10,
          name: "Jim Green",
          sex: "女",
          permission: 0,
          persontxt: "London No. 1 Lake Park"
        },
        {
          id: 11,
          name: "Joe Black",
          sex: "男",
          permission: 0,
          persontxt: "Sydney No. 1 Lake Park"
        },
        {
          id: 12,
          name: "Jon Snow",
          sex: "女",
          permission: 0,
          persontxt: "Ottawa No. 2 Lake Park"
        },
        {
          id: 13,
          name: "John Brown",
          sex: "男",
          permission: 0,
          persontxt: "New York No. 1 Lake Park"
        },
        {
          id: 14,
          name: "Jim Green",
          sex: "女",
          permission: 1,
          persontxt: "London No. 1 Lake Park"
        },
        {
          id: 15,
          name: "Joe Black",
          sex: "男",
          permission: 1,
          persontxt: "Sydney No. 1 Lake Park"
        },
        {
          id: 16,
          name: "Jon Snow",
          sex: "男",
          permission: 0,
          persontxt: "Ottawa No. 2 Lake Park"
        },
        {
          id: 17,
          name: "John Brown",
          sex: "女",
          permission: 0,
          persontxt: "New York No. 1 Lake Park"
        },
        {
          id: 18,
          name: "Jim Green",
          sex: "女",
          permission: 0,
          persontxt: "London No. 1 Lake Park"
        },
        {
          id: 19,
          name: "Joe Black",
          sex: "男",
          permission: 0,
          persontxt: "Sydney No. 1 Lake Park"
        },
        {
          id: 20,
          name: "Jon Snow",
          sex: "女",
          permission: 0,
          persontxt: "Ottawa No. 2 Lake Park"
        }
      ],
      accountModal: {
        show: false,
        type: "新增用户",
        info: {}
      },
      user: {
        name: "张三",
        sex: "",
        person_txt: ""
      }
    };
  },
  watch: {},
  methods: {
    accountok() {},
    acountcancel() {
      this.accountModal.show = false;
    },
    editaccount(row) {
      this.accountModal = {
        show: true,
        type: "编辑用户"
      };
      this.user = row;
    },
    remove(index) {
      this.data6.splice(index, 1);
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
.usermanage {
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
    .usertable {
      width: 100%;
      padding: 20px;
      background-color: #fff;
    }
  }
}
.accountmodel {
  width: 100%;
  .row_box {
    height: 52px;
    width: 100%;
    padding: 10px 20px;
    .clearfloat();
    .row_tip {
      float: left;
      width: 100px;
      text-align: right;
      font-size: 16px;
      line-height: 32px;
    }
    .row_input {
      float: left;
      width: 300px;
    }
  }
}
</style>