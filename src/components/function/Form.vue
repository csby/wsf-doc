<template>
    <div v-if="data !== null">
        <div class="row" v-for="(item, index) in data" :key="index">
            <span class="item-key item-label">{{item.key}}</span>
            <span>:&nbsp;</span>
            <el-input class="item-value" size="mini" placeholder="" v-model="item.value" :readonly="true">
                <template slot="append" >
                    <span v-if="item.valueKind === 1" >文 件</span>
                    <span v-else>文 本</span>
                </template>
            </el-input>
            <span>(</span>
            <span v-if="item.required" class="item-required">必填</span>
            <span v-else class="item-optional">可选</span>
            <span>):&nbsp;</span>
            <span class="item-note">{{item.note}}</span>
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
    export default class Form extends VueBase {
        
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        align-items: center;
        margin-bottom: 3px;
    }
    .item-value {
        font-weight: bold;
        width: 180px;
    }
    .item-required {
        color: red;
        font-style: italic;
    }
    .item-optional {
        color: darkgray;
        font-style: italic;
    }
    .item-label {
        display: inline-block;
        width: 120px;
        align-content: end;
        text-align: right;
    }
    .item-note {
        color: gray;
    }
</style>