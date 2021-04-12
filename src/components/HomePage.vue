<template>
    <div>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <el-row>
                    <div class="banner">
                        <div class="item">
                            <img :src="dataList[currentIndex]">
                        </div>
                        <div class="page" v-if="this.dataList.length > 1">
                            <ul>
                            <li @click="gotoPage(prevIndex)">&lt;</li>
                            <li v-for="(item, index) in dataList" @click="gotoPage(index)" :class="{'current':currentIndex == index}" :key="index">  {{index+1}}</li>
                            <li @click="gotoPage(nextIndex)">&gt;</li>
                            </ul>
                        </div>
                    </div>
                </el-row>
                <el-upload
                    class="upload-demo"
                    :data="uploadParam"
                    :headers="uploadHeader"
                    drag
                    action="http://127.0.0.1:8081/api/v1/file/uploadFile"
                    multiple
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                        将文件拖到此处，或<em>点击上传</em>
                    </div>
                    <div class="el-upload__tip" slot="tip">
                        只能上传jpg/png文件，且不超过500kb
                    </div>
                </el-upload>
            </el-main>
            <el-footer>
                <el-button @click="set">set</el-button>
                <el-button @click="get">get</el-button>

            </el-footer>
        </el-container>
    </div>
</template>

<script>
import Header from "./comm/Header";
export default {
    name: "HomePage",
    components: {
        Header
    },
    data () {
        return {
            msg: "Welcome to Your Vue.js App",
            uploadParam: {
                fileType: 0,
                activityId: 1,
                uploaderName: "jWX615432"
            },
            uploadHeader: {
                Accept: "application/json"
            },
            // 图片列表
            dataList: [
                "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
                "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
                "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"
            ],
            // 默认显示图片
            currentIndex: 0,
            timer: null
        };
    },
    computed: {
        // 上一张
        prevIndex () {
            if (this.currentIndex === 0) {
                return this.dataList.length - 1;
            } else {
                return this.currentIndex - 1;
            }
        },
        // 下一张
        nextIndex () {
            if (this.currentIndex === this.dataList.length - 1) {
                return 0;
            } else {
                return this.currentIndex + 1;
            }
        }
    },
    created () {
        this.runInv();
    },
    methods: {
        handleGetUserList () {
            this.$axios
                .get("v2/user/queryUserList")
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.error(error));
        },
        set () {
            this.$axios
                .get("v2/user/set")
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.error(error));
        },
        get () {
            this.$axios
                .get("v2/user/get")
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.error(error));
        },
        gotoPage (index) {
            this.currentIndex = index;
        },
        // 定时器
        runInv () {
            this.timer = setInterval(() => {
                this.gotoPage(this.nextIndex);
            }, 3000);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
* {
    margin: 0;
    padding: 0;
}
ul li {
    list-style: none;
    float: left;
    width: 30px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    color: rgba(255,255,255,.8);
    font-size: 14px;
}
.banner {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
}
.banner img {
    width: 100%;
    display: block;
}
.banner .page {
    background: rgba(0,0,0,.5);
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
}
.banner .page ul {
    float: right;
}
.current {
    color: #ff6700;
}
</style>
