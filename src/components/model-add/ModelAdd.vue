<template>
    <div class="model-add">
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
                <el-breadcrumb-item>新增机型<i class="el-icon-error"></i></el-breadcrumb-item>
            </el-breadcrumb>
            </el-col>
        </el-row>
        <!-- 主体部分 -->
        <el-row class="main">
            <el-col :span="12">
                <!-- 1 -->
                <el-col :span="24" style='padding:30px;font-size:18px'>
                    基本信息
                </el-col>
                <!-- 1-1 -->
                <el-form :model="ruleForm" :rules="rules" :inline="true" ref="ruleForm" label-width="100px" class="demo-ruleForm" style='padding-left:40px'>
                    <el-form-item label="内部编号 :" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="厂家型号 :" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="厂家名称 :" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="生产基地 :" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="机型详情 :" prop="name">
                        <el-input type="textarea" v-model="ruleForm.name" ></el-input>
                    </el-form-item>
                </el-form>
                <!-- 1-2 -->
                <el-col :span="24" style='padding:30px;font-size:18px'>
                    价格
                </el-col>
                <el-form :model="ruleForm" :rules="rules" :inline="true" ref="ruleForm" label-width="100px" class="demo-ruleForm" style='padding-left:40px'>
                    <el-form-item label="销售价 :" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="折扣 :">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="租金 :" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="折扣 :">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="保证金 :">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="月软件费 :">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-col :span="24" style='padding:30px;font-size:18px'>
                    <template>
                        <!-- `checked` 为 true 或 false -->
                        <el-checkbox v-model="checked">微信支付</el-checkbox>
                        <el-checkbox v-model="checked">支付宝支付</el-checkbox>
                        <el-checkbox v-model="checked">现金支付</el-checkbox>
                    </template>
                    </el-col>
                </el-form>
                <el-col :span="24" style='padding:30px;font-size:18px'>
                <!-- 1-3 -->
                <el-col :span="18">
                    属性
                </el-col>
                <el-col :span="4" :offset="1">
                    <el-button class="addModel" @click='$router.push("/model-add")'> + 新增机型 </el-button>
                </el-col>
                </el-col>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style='padding-left:40px'>
                    <el-form-item label="机器属性 :">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="属性参数 :">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    
                </el-form>
                <!-- 1-2 -->
                <el-col :span="24" style='padding:30px;font-size:18px'>
                    机型图片
                </el-col>
                <!-- 上传图片 -->
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-col>
            <!-- 图片预览 -->
            <el-col :span="12">
                hahha
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<style lang='less' scoped>
    // 面包屑导航
    .el-breadcrumb {
    padding-left: 30px;
    height: 50px;
    line-height: 50px;
    background: #fff;
    margin: -20px -20px 20px;
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
//   主体部分
  .model-add {
      height:100%;
        .main {
            height:1000px;
            background: #fff;
        }
    // 添加机型
    .addModel {
      background-image:linear-gradient(to top, #03a8fd,#3bcdf1);
      color: #fff;
      font-size: 18px;
    }
      
  }
</style>
