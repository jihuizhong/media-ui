<template>
    <div>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
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
import Header from './comm/Header';
export default {
    name: 'HomePage',
    components: {
        Header
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            uploadParam: {
                fileType: 0,
                activityId: 1,
                uploaderName: 'jWX615432'
            },
            uploadHeader: {
                Accept: 'application/json'
            }
        };
    },
    methods: {
        handleGetUserList () {
            this.$axios
                .get('v2/user/queryUserList')
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.error(error));
        },
        set () {
            this.$axios
                .get('v2/user/set')
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.error(error));
        },
        get () {
            this.$axios
                .get('v2/user/get')
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.error(error));
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
</style>
