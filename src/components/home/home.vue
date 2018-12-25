<template>
  <el-container class="home-container">
    <el-header class="home-header">
      <el-row :gutter="20">
        <el-col :span="3" class="logo">
          <img src="@/assets/logo.png" alt="">
        </el-col>
        <el-col :span="10" class="title">
          <img src="@/assets/images/header-menu.png" alt="">
          <span>云智贩后台管理系统</span>
        </el-col>
        <el-col :span="10" class="header-right">
          <el-row>
            <el-col :span="8" class="date">
              <img src="@/assets/images/header-date2.png" alt="">
              <span>2018-12-18</span>
            </el-col>
            <el-col :span="8" class="news">
              <img src="@/assets/images/header-news.png" alt="">
            </el-col>
            <el-col :span="8" class="user">
              <img src="@/assets/images/header-user.png" alt="">
              <span>Admin</span>
              <img src="@/assets/images/header-send.png" alt="">
            </el-col>
          </el-row>
          <!-- <span>欢迎上海前端22期星曜会员</span>
          <a class="logout" @click.prevent="logout" href="#">退出</a> -->
        </el-col>
      </el-row>
    </el-header>
    <el-container class="home-content">
      <el-aside width="200px" class="home-aside">
        <!-- <el-menu
          class="menu"
          :unique-opened="true"
          :default-active="activeMenu"
          :router="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <el-submenu :index="level1.path" v-for="level1 in menuList" :key="level1.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ level1.authName }}</span>
            </template>
            <el-menu-item :index="level2.path" v-for="level2 in level1.children" :key="level2.id">
              <i class="el-icon-menu"></i>
              <span>{{ level2.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu> -->
         <el-menu
          :router="true"
          class="menu"
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="home">
            <img src="@/assets/images/index.png" alt="">
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <img src="@/assets/images/basic2x.png" alt="">
              <span>基础管理</span>
            </template>
            <el-menu-item index="model">
              <i></i>
              <span slot="title">机型管理</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i></i>
              <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item index="2-3">
              <i></i>
              <span slot="title">部门管理</span>
            </el-menu-item>
            <el-menu-item index="2-4">
              <i></i>
              <span slot="title">员工管理</span>
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main class="home-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// export default {
//   data () {
//     return {
//       menuList: [],
//       activeMenu: 'home'
//     }
//   },
//   created () {
//     this.fetchMenuList()

//     this.setActiveMenu()
//   },
//   methods: {
//     async fetchMenuList () {
//       const ret = await this.$http.get(`/menus`)

//       const { meta, data } = ret.data
//       if (meta.status === 200) {
//         this.menuList = data
//       }
//     },
//     logout () {
//       this.$confirm('您确定退出吗?', '提示', {
//         confirmButtonText: '确定',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         localStorage.removeItem('token')
//         this.$router.push('/login')

//         this.$message({
//           type: 'success',
//           message: '退出成功'
//         })
//       }).catch(() => {
//         this.$message({
//           type: 'info',
//           message: '已取退出'
//         })
//       })
//     },
//     setActiveMenu () {
//       this.activeMenu = this.$route.path.replace('/', '')
//     }
//   }
// }
</script>

<style lang='less' scoped>
  .home-container,
  .home-content,
  .home-aside,
  .home-main,
  .home-aside .menu {
    height: 100%;
    img {
      width: 60px;
    }
    span {
      font-size: 20px;
    }
    .el-menu-item ,
    .el-submenu__title {
      padding-left: 0 !important;
    }

  }
  // 头部部分
  .home-header {
    line-height: 60px;
    background-color: #b3c1cd;
    font-weight: bolder;
    padding-left: 0;
    background-image:linear-gradient(to right, #24a5e4,#24a5e4,#57f4f6);
    .logo {
      min-width: 200px;
      background: #2090cb;
      img {
        width: 160px;
        vertical-align: middle;
      }
    }
    .title {
      color: #fff;
      font-size: 30px;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
    .header-right {
      text-align: center;
      .date{
        // background: #f40;
      }
      .news{
        // background: green;
      }
      .user{
        // background: blueviolet;
      }
      img {
        width: 30px;
        vertical-align: middle;
      }
      span {
        color: #fff;
        margin: 10px;
      }
    }
  }
  .el-container .home-header  .el-row{
    margin-left: 0 !important;
  }
  // 侧边栏部分
  .el-menu {
    border-right: 0;
    .el-submenu {
      border-bottom: 2px solid #414b5a;
      border-top: 2px solid #414b5a;
    }
  }
  .home-aside {
    background-color: #303a42;
    border: 2px solid #414b5a;
    .el-menu-item ,
    .el-submenu,
    /deep/.el-submenu__title {
      padding-left: 0 !important;
      i {
        color: #fff;
        font-size: 20px;
      }
      .el-menu-item {
        background: #2090cb !important;
        text-align: center;
        padding-right: 0;
        span {
          font-size: 16px;
        }
         i {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #fff;
            display: inline-block;
          }
      }
    }
  }

  .home-content {
    background-color: #eaeef1;
  }
</style>
