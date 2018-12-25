<template>
  <div>
  <!-- 面包屑导航 -->
  <el-row>
    <el-col :span="24" class='breakLink'>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">
        <img src="@/assets/images/index_home.png" alt="">
        首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>基础管理<i class="el-icon-error"></i></el-breadcrumb-item>
        <el-breadcrumb-item>机型管理<i class="el-icon-error"></i></el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
  <!-- <img src="http://230774d8k8.imwork.net/ssm_yunzhifan/img/index.jpg" alt=""> -->
  <!-- 搜索和添加 -->
  <el-row :gutter="20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-col :span="20">
          <el-form-item label="机器类型:">
            <el-select v-model="formInline.region" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="机器名称:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
          <el-form-item label="机器型号:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button><img src="@/assets/images/search.png" alt=""></el-button>
          </el-form-item>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-button class="addModel" @click='$router.push("/model-add")'> + 新增机型 </el-button>
        </el-col>
      </el-form>
  </el-row>

  <!-- 表格 -->
  <el-table
    :data="userList"
    stripe
    :border='true'
    style="width: 100%">
    <el-table-column
      align='center'
      prop="modelId"
      label="序号"
      width="90">
    </el-table-column>
    <el-table-column
      align='center'
      prop="vendorkind.vendor_kind_name"
      label="类型"
      width="124">
    </el-table-column>
    <el-table-column
      align='center'
      prop="yzf_model"
      label="型号"
      width="142">
    </el-table-column>
    <el-table-column
      align='center'
      prop="yzf_modelName"
      label="名称"
      width="240">
    </el-table-column>
    <el-table-column
      align='center'
      prop="factory"
      label="厂家"
      width="100">
    </el-table-column>
    <el-table-column
      align='center'
      prop="name"
      label="图片"
      width="100">
      <!-- 图片不显示 -->
        <template slot-scope="scope">
          <img :src="scope.row.focused_img_url"  min-width="70" height="70"/>
        </template>
    </el-table-column>
    <el-table-column
      align='center'
      prop="vChannel.channel_type"
      label="货道类型"
      width="100">
    </el-table-column>
    <el-table-column
      prop='pay_mode'
      align='center'
      label="支付方式">
      <template slot-scope="scoped">
        <!-- 支付宝 -->
        <img src="@/assets/images/zhifubao@2x.png" style="width: 20px" v-if ="scoped.row.pay_mode == '1'" >
        <!-- 微信 -->
        <img src="@/assets/images/weixin@2x.png" style="width: 20px" v-else-if ="scoped.row.pay_mode == '2'">
        <!-- 现金 -->
        <img src="@/assets/images/money@2x.png" style="width: 20px" v-else-if ="scoped.row.pay_mode == '3'">
        <!-- 支付宝+微信 -->
        <span  v-else-if ="scoped.row.pay_mode == '12'">
          <img src="@/assets/images/zhifubao@2x.png" style="width: 20px">
          <img src="@/assets/images/weixin@2x.png" style="width: 20px">
        </span>
        <!-- 微信+现金 -->
        <span  v-else-if ="scoped.row.pay_mode == '23'">
          <img src="@/assets/images/weixin@2x.png" style="width: 20px">
          <img src="@/assets/images/money@2x.png" style="width: 20px">
        </span>
        <!-- 支付宝+现金 -->
        <span  v-else-if ="scoped.row.pay_mode == '13'">
          <img src="@/assets/images/zhifubao@2x.png" style="width: 20px">
          <img src="@/assets/images/money@2x.png" style="width: 20px">
        </span>
        <span  v-else-if ="scoped.row.pay_mode == '123'">
          <img src="@/assets/images/zhifubao@2x.png" style="width: 20px">
          <img src="@/assets/images/weixin@2x.png" style="width: 20px">
          <img src="@/assets/images/money@2x.png" style="width: 20px">
        </span>
      </template>
    </el-table-column>
    <el-table-column
      align='center'
      label="操作"
      class='make'
      width="200">
      <template slot-scope="scope">
        <a href="javascript:;">上架</a>
        <a href="javascript:;">修改</a>
        <a href="javascript:;">查看详情</a>
      </template>
    </el-table-column>
  </el-table>

  <!-- 分页 -->
   <!-- 分页 -->
   <!-- current-change	currentPage 改变时会触发	当前页 -->
  <el-pagination
    @current-change='currentChange'
    :current-page="pagenum"
    :page-sizes="[5, 10, 15, 20, 25, 30]"
    :page-size="5"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</div>
</template>

<script>
export default {
  created () {
    this.getUserList()
  },
  data () {
    return {
      userList: [],

      // 行内表单
      formInline: {
        user: '',
        region: ''
      },

      total: 0,
      pagenum: 1,

      // searchTxt: '',
      // 分页假数据
      currentPage4: 1,
      // // 添加用户对话框
      // dialogFormVisible: false,
      // editFormVisible: false,
      // roleFormVisible: false,

      rolesList: [],
      roleForm: {
        username: '',
        roleId: -1,
        userId: -1
      },

      userAddForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },

      userEditForm: {
        id: -1,
        email: '',
        mobile: ''
      },

      editRules: {
        email: [
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        mobile: [
          { pattern: /^1[3,4,5,7,8][0-9]{9}$/, message: '手机格式不正确', trigger: 'blur' }
        ]
      },

      // 表单校验
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 12, message: '用户名长度为5到12个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '密码长度为5到12个字符', trigger: 'blur' }
        ],
        email: [
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        mobile: [
          { pattern: /^1[3,4,5,7,8][0-9]{9}$/, message: '手机格式不正确', trigger: 'blur' }
        ]
      },

      rightsList: {},

      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },

  methods: {
    /**
     * 获取分页数据
     * @param {number} pagenum 当前页默认值为：1
     */
    async getUserList (pagenum = 1, query = '') {
      const res= await this.$http.get('/getVM', {
          // 传递get参数：
          params: {
            pageNum: 1,
            pageSize: 5,
            query
          }
        })
          console.log(res)

          // const { meta, data } = res.data
          if (res.status === 200) {
            this.userList = res.data.listTVM
            this.total = res.data.pageTotal
            this.pagenum = res.data.pageNum
          }
    },
    // 改变分页标签进行渲染
    currentChange (curUser) {
      this.getUserList(curUser)
    },
    // 搜索
    search () {
      this.getUserList(1, this.searchTxt)
    },
    changeUserState (data) {
      this
        .$http
        .put(`users/${data.id}/state/${data.mg_state}`)
        .then(res => {
          const { meta } = res.data

          if (meta.status === 200) {
            this.$message({
              type: 'success',
              message: `${data.mg_state ? '启用' : '禁用'}成功`
            })
          }
        })
        .catch(() => {
          this.$message({
            type: 'error',
            message: '操作失败，请稍后再试'
          })
        })
    },

    delUser (data) {
      this.$confirm('您确定删除该用户吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          return this
            .$http
            .delete(`users/${data.id}`)
        })
        .then(res => {
          const { meta } = res.data
          if (meta.status === 200) {
            this.$message({
              type: 'success',
              message: '删除成功'
            })

            // 删除数据
            this.userList = this.userList.filter(user => user.id !== data.id)
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消删除'
          })
        })
    },

    showEdit (data) {
      this.editFormVisible = true
      this.userEditForm = { id: data.id, username: data.username, email: data.email, mobile: data.mobile }
    },

    editUser () {
      const { id, email, mobile } = this.userEditForm

      this
        .$http
        .put(`/users/${id}`, {
          email,
          mobile
        })
        .then(res => {
          const { meta } = res.data

          if (meta.status === 200) {
            this.$message({
              type: 'success',
              message: meta.msg
            })

            this.editFormVisible = false
            this.getUserList(this.pagenum)
          }
        })
    },

    async showRoleDialog (user) {
      // 获取当前用户的角色信息
      const roleInfo = await this.$http.get(`/users/${user.id}`)
      const { meta: roleMeta, data: roleData } = roleInfo.data
      if (roleMeta.status === 200) {
        // 新用户展示请选择，而不是数字 -1
        if (roleData.rid === -1) {
          this.roleForm.roleId = ''
        } else {
          this.roleForm.roleId = roleData.rid
        }
      }

      // 获取所有角色信息
      const ret = await this.$http.get('/roles')
      const { meta, data } = ret.data
      if (meta.status === 200) {
        this.rolesList = data
        this.roleForm.username = user.username
        this.roleForm.userId = user.id
        this.roleFormVisible = true
      }
    },

    async assignRoleToUser () {
      const { userId, roleId } = this.roleForm
      const ret = await this.$http.put(`users/${userId}/role`, {
        rid: roleId
      })

      const { meta } = ret.data
      if (meta.status === 200) {
        this.roleFormVisible = false
        this.$message({
          type: 'success',
          mesage: '分配角色成功'
        })
      }
    }
  },

  watch: {
    dialogFormVisible (curVal) {
      !curVal && this.$refs.userForm.clearValidate()
    }
  }
}
</script>

<style lang='less' scoped>
  .el-breadcrumb {
    padding-left: 30px;
    height: 50px;
    line-height: 50px;
    background: #fff;
    margin: -20px -20px 0;
    font-size: 16px;
    img {
      width: 15px;
      vertical-align: middle;
    }
    i {
      margin-left: 5px;
      color: #ccc;
    }

  }
  // 搜索添加部分
  .demo-form-inline {
    height: 40px;
    padding: 30px 0;
    background: #fff;
    margin: 30px auto;
    line-height: 40px;
    // 下拉框
    .el-select /deep/.el-input__inner {
      width: 100px;
      height: 50px;
      color: #000;
      vertical-align: middle;
    }
    // 输入框
    .el-input /deep/.el-input__inner {
      width: 200px;
      height: 50px;
    }
    // 搜索按钮
    .el-form-item__content .el-button {
      height: 50px;
      width: 66px;
      background-image:linear-gradient(to top, #24a5e4,#57f4f6);
      img {
        width: 30px;
        vertical-align: middle;
      }
    }
    // 添加机型
    .addModel {
      background-image:linear-gradient(to top, #03a8fd,#3bcdf1);
      color: #fff;
      font-size: 18px;
    }
  }
  .el-table__row {
    height: 100px;
    .el-table_1_column_1 {
    position: relative;
    /deep/&::before {
      content:'';
      display: block;
      width: 50%;
      height: 50%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
