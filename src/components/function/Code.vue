<template>
    <div v-if="data !== null">
        <div>
            <span>错误代码</span>
        </div>
        <hr/>
        <div class="row" v-for="(item, index) in data" :key="index">
            <span class="item-label">{{item.code}}</span>
            <span>&ensp;-&ensp;</span>
            <span class="item-value">{{item.summary}}</span>
        </div>
    </div>
</template>

<script>
    import Component from 'vue-class-component'
    import VueBase from '@/components/VueBase'

    @Component({
        props: {
            data: {
                type: Array,
                default: null
            }
        }
    })
    export default class Code extends VueBase {
        
    }
</script>

<style scoped lang="scss">
    .row {
        margin-bottom: 1px;
    }
    .item-label {
        display: inline-block;
        width: 65px;
        align-content: end;
        text-align: right;
        font-weight: bold;
    }
    .item-value {
        color: #666666;
    }
</style>