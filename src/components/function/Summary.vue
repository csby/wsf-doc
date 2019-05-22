<template>
    <el-collapse-item :name="name">
        <template slot="title">
            <span class="pnl-title">{{funcName}}</span>
            <el-tooltip v-show="funcName !== ''" content="复制到剪贴板" placement="right">
                <el-button style="padding: 0 5px; margin-left: 5px;"
                           type="text" icon="el-icon-document" size="small"
                           v-clipboard:copy="funcName" v-on:click.stop="function() {}"/>
            </el-tooltip>
            <span>&nbsp;&nbsp;</span>
            <el-button size="small" @click.stop="onTry">尝试一下</el-button>
        </template>
        <div>
            <span>方法:&nbsp;</span>
            <span class="item-value method">{{funcMethod}}</span>
        </div>
        <div>
            <span>路径:&nbsp;</span>
            <span class="item-value path">{{funcPath}}</span>
            <el-tooltip v-show="funcPath !== ''" content="复制路径到剪贴板" placement="right">
                <el-button style="padding: 0 5px; margin-left: 5px;"
                           type="text" icon="el-icon-document" size="small"
                           v-clipboard:copy="funcPath"/>
            </el-tooltip>
        </div>
        <div>
            <span>地址:&nbsp;</span>
            <span class="item-value path">{{funcFullPath}}</span>
            <el-tooltip v-show="funcFullPath !== ''" content="复制地址到剪贴板" placement="right">
                <el-button style="padding: 0 5px; margin-left: 5px;"
                           type="text" icon="el-icon-document" size="small"
                           v-clipboard:copy="funcFullPath"/>
            </el-tooltip>
        </div>
        <div class="note">
            <span>{{funcNote}}</span>
        </div>
    </el-collapse-item>
</template>

<script>
    import VueBase from '@/components/VueBase'
    import Component from 'vue-class-component'

    @Component({
        props: {
            name: {
                type: String,
                default: "summary"
            },
            data: {
                type: Object,
                default: null
            }
        }
    })
    export default class Summary extends VueBase {
        get funcId() {
            if(this.data)
                return this.data.id;
            else
                return "";
        }
        get funcName() {
            if(this.data)
                return this.data.name;
            else
                return "";
        }
        get funcMethod() {
            if(this.data)
                return this.data.method;
            else
                return "";
        }
        get funcPath() {
            if(this.data)
                return this.data.path;
            else
                return "";
        }
        get funcFullPath() {
            if(this.data)
                return this.data.fullPath;
            else
                return "";
        }
        get funcNote() {
            if(this.data)
                return this.data.note;
            else
                return "";
        }
        get isWebsocket() {
            if(this.data)
                return this.data.webSocket;
            else
                return false;
        }

        onTry() {
            let name = "Http";
            let id = this.funcId;
            if(this.isWebsocket) {
                name = "Socket";
            }

            // this.$router.push({
            //     name: name,
            //     params: {funId: id},
            // });

            let routeData = this.$router.resolve({
                name: name,
                params: {funId: id},
            });
            window.open(routeData.href, '_blank');
        }
    }
</script>

<style scoped lang="scss">
    .pnl-title {
        font-size: 16px;
    }

    .item-value {
        font-weight: bold;
    }

    .method {
        font-style: italic;
    }

    .note {
        margin-top: 10px;
        color: gray;
    }
</style>