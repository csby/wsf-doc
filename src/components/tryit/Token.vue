<template>
    <el-dialog :visible.sync="visible"
               :modal-append-to-body="false"
               :close-on-click-modal="false"
               :before-close="onBeforeClose"
               title="创建凭证"
               width="30%">
        <el-form v-if="data !== null" size="small">
            <el-form-item v-for="(item, index) in data" :key="index"
                          :label="item.label" :required="item.required" :label-width="labelWidth">
                <el-input v-if="item.valueKind === 1" v-model="item.value" type="password" @keyup.enter.native="createToken" :clearable="true"/>
                <el-select v-else-if="item.valueKind === 2" v-model="item.value">
                    <el-option v-for="(option, index) in item.selections" :key="index"
                               :label="option.name" :value="option.value">
                    </el-option>
                </el-select>
                <el-input v-else v-model="item.value" type="text" @keyup.enter.native="createToken" :clearable="true"/>
            </el-form-item>
            <el-form-item size="large" :label-width="labelWidth">
                <el-button type="primary" @click="createToken" :disabled="creating" style="width: 135px;">
                    <span v-if="creating">
                        <i class="el-icon-loading"></i>
                        <span>创建中</span>
                    </span>
                    <span v-else>创 建</span>
                </el-button>
            </el-form-item>
        </el-form>

    </el-dialog>
</template>

<script>
    import VueBase from '@/components/VueBase'
    import Component from 'vue-class-component'

    @Component({
        props: {
            value: {
                type: Boolean,
                default: false
            },
            id: {
                type: String,
                default: ""
            },
            place: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: ""
            },
        },
        watch: {
            'value': {
                handler: 'onValueChanged'
            }
        }
    })
    export default class Token extends VueBase {
        visible = false
        creating = false
        labelWidth = "80px"
        data = []

        onValueChanged(newVal, oldVal) {
            if(newVal == oldVal) {
                return;
            }

            this.visible = newVal;

            if(newVal) {
                this.creating = false;
                this.getInfo();
            }
        }

        onBeforeClose(done) {
            this.$emit('input', false);
            done();
        }

        onGetInfo(code, err, data) {
            if (code === 0) {
                this.data = data;
            }
            else {
                this.apiError(err);
            }
        }
        getInfo() {
            let uri = this.network.uris.getTokenUI + this.id;
            this.post(uri, null, this.onGetInfo);
        }

        onCreateToken(code, err, data) {
            this.creating = false;
            if (code === 0) {
                this.$emit("created", this.place, this.name, data);
            }
            else {
                this.apiError(err);
            }
        }
        createToken() {
            if(this.data === null)
                return

            let items = new Array();
            let count = this.data.length;
            for(let i = 0; i < count; i++) {
                let item = this.data[i];
                if(item.required) {
                    if(this.isNullOrEmpty(item.value)) {
                        this.error(item.label + "必填");
                        return;
                    }
                }

                items.push({
                    name: item.name,
                    value: item.value
                });
            }

            this.creating = true;
            let uri = this.network.uris.createToken + this.id;
            this.post(uri, items, this.onCreateToken);
        }
    }
</script>

<style scoped lang="scss">

</style>