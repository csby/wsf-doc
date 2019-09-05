<template>
    <div v-if="data !== null">
        <div v-for="(model, index) in data" :key="index">
            <span class="model-key">{{model.name}}&nbsp;{</span>
            <div>
                <div v-for="(child, index) in model.children" :key="index">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span class="model-key">{{child.name}}</span>
                    <span>(</span>
                    <span class="model-type">{{child.type}}</span>
                    <span v-if="optional">
                        <span v-if="child.required" class="model-required">, 必填</span>
                        <span v-else class="model-optional">, 可选</span>
                    </span>
                    <span>):&nbsp;</span>
                    <span class="model-note">{{child.note}}</span>
                </div>
            </div>
            <div class="model-key">}</div>
            <div>&nbsp;</div>
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
    export default class Model extends VueBase {
    }
</script>

<style scoped lang="scss">
    .model-key {
        font-weight: bold;
    }
    .model-type {
        color: cornflowerblue;
    }
    .model-required {
        color: red;
        font-style: italic;
    }
    .model-optional {
        color: darkgray;
        font-style: italic;
    }
    .model-note {
        color: gray;
    }
</style>