<template>
    <pre ref="example" v-show="data !== null"></pre>
</template>

<script>
    import VueBase from '@/components/VueBase'
    import Component from 'vue-class-component'

    @Component({
        props: {
            data: {
                type: Object,
                default: null
            }
        },
        watch: {
            'data': {
                handler: 'onDataChanged'
            }
        }
    })
    export default class Example extends VueBase {
        onDataChanged(newVal, oldVue) {
            if(newVal) {
                this.$refs.example.innerHTML = this.syntaxHighlight(newVal);
            }
            else {
                this.$refs.example.innerHTML = "";
            }
        }
    }
</script>

<style scoped lang="scss">
    pre {
        outline: 1px solid #ccc;
        padding: 5px;
        margin: 2px;
    }
</style>