<template>
    <div style="float: left;width: 100%;">
        <el-menu
            :default-active="activePage"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <div class="self-menu-demo" @click="handleLogin">登录</div>
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">贝尔户外小课堂</el-menu-item>
            <el-menu-item index="3">贝尔大赛</el-menu-item>
            <el-menu-item index="4">关于我们</el-menu-item>
        </el-menu>
        <div>
            <el-input
                placeholder="请输入内容"
                v-model="seartchKey">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <div>
                登录
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data () {
        return {
            activePage: "1",
            seartchKey: ""
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleLogin () {
            console.log("to login");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.self-menu-demo {
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    font-size: 14px;
    padding: 0 20px;
    cursor: pointer;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    float: right;
    color: rgb(255, 255, 255);
    border-bottom-color: transparent;
    background-color: rgb(84, 92, 100);
}
</style>
