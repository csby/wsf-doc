<template>
    <div>
        <el-input style="padding-bottom: 3px;" placeholder="输入关键字进行过滤" v-model="catalogFilter" size="small" clearable/>
        <el-tree ref="catalogTree"
                 class="filter-tree"
                 :data="catalogs"
                 :props="catalogProps"
                 :highlight-current="true"
                 :default-expand-all="false"
                 :filter-node-method="filterCatalogNode"
                 @node-click="onCatalogNodeClick">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span v-if="data.type === 0" class="tree-node">
                    <span class="tree-node-catalog">
                      <i class="el-icon-folder"></i>
                      <span>&nbsp;{{data.name}}</span>
                    </span>
                  </span>
                  <span v-if="data.type === 1" class="tree-node">
                    <span class="tree-node-function">
                      <i class="el-icon-view"></i>
                      <span>&nbsp;{{data.name}}</span>
                    </span>
                  </span>
                </span>
        </el-tree>
    </div>
</template>

<script>
    import VueBase from '@/components/VueBase'
    import Component from 'vue-class-component'

    @Component({
        watch: {
            'catalogFilter': {
                handler: 'onCatalogFilterChanged'
            }
        }
    })
    export default class Catalog extends VueBase {
        catalogs = []
        catalogProps = {
            children: 'children',
            label: 'name'
        }

        catalogFilter = ""
        filterCatalogNode(value, data) {
            if (!value) {
                return true;
            }

            if (data.name.indexOf(value) !== -1) {
                return true
            }

            return data.keywords.indexOf(value) !== -1;
        }
        onCatalogFilterChanged(newVal, oldVal) {
            this.$refs.catalogTree.filter(newVal);
        }

        onCatalogNodeClick(data) {
            if(this.isNotNullOrEmpty(data.id)) {
                this.$emit("function-click", data.id);
            }
        }

        onGetCatalog(code, err, data) {
            if (code === 0) {
                this.catalogs = data
            }
            else {
                this.apiError(err);
            }
        }
        getCatalog() {
            this.post(this.uris.getCatalogTree, null, this.onGetCatalog);
        }


        mounted () {
            this.getCatalog();
        }
    }
</script>
