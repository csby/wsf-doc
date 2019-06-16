<template>
    <div v-if="data !== null">
        <div class="row" v-for="(header, index) in data" :key="index">
            <span v-if="optional">
                <span class="item-key item-label">{{header.name}}</span>
                <span>:&nbsp;</span>
                <el-select size="mini" placeholder="" :value="header.defaultValue">
                    <el-option v-for="(item, index) in header.values" :key="index" :value="item">
                    </el-option>
                </el-select>
                <span>(</span>
                <span v-if="header.required" class="item-required">必填</span>
                <span v-else class="item-optional">可选</span>
                <span>):&nbsp;</span>
                <span class="item-note">{{header.note}}</span>
            </span>
            <span v-else>
                <span>{{header.name}}</span>
                <span>:&nbsp;</span>
                <span class="item-value">{{header.defaultValue}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    import VueBase from '@/components/VueBase'
    import Component from 'vue-class-component'

    @Component({
        props: {
            data: {
                type: Array,
                default: null
            },
            optional: {
                type: Boolean,
                default: false
            }
        }
    })
    export default class Header extends VueBase {
    }
</script>

<style scoped lang="scss">
    .row {
        margin-bottom: 3px;
    }
    .item-value {
        font-weight: bold;
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