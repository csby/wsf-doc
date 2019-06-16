<template>
    <div>
        <el-input size="small"
                  :placeholder="note"
                  :readonly="true"
                  v-model="filePath">
            <template slot="prepend">
                <span v-if="required" class="input-label input-required">{{name}}</span>
                <span v-else class="input-label">{{name}}</span>
            </template>
            <el-button slot="append" class="btn-append" @click="selectFile">
                <span class="btn-select">选择文件...</span>
            </el-button>
        </el-input>
        <input class="input-file" ref="fileSelector" type="file"
               :accept="accept"
               v-on:input="onFileSelected"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        props:{
            name: {
                type: String,
                default: "",
            },
            note: {
                type: String,
                default: "",
            },
            required: {
                type: Boolean,
                default: false
            },
            accept: {
                type: String,
                default: "",
            },
            value: {
                type: File,
                default: null
            }
        }
    })
    export default class FileInput extends Vue {
        filePath = ""

        selectFile() {
            this.$refs["fileSelector"].click();
        }

        onFileSelected() {
            let fileSelector = this.$refs["fileSelector"];
            if(!fileSelector) {
                return;
            }
            this.filePath = fileSelector.value;
            let file = fileSelector.files[0];
            this.$emit('input', file);
        }
    }
</script>

<style scoped lang="scss">
    .input-label {
        display: inline-block;
        width: 120px;
        align-content: end;
        text-align: right;
        color: black;
    }
    .input-required {
        color: red;
    }
    .input-file {
         display: none;
     }
    .btn-append {
        width: 135px;
    }
    .btn-select {
        color: black;
    }

</style>