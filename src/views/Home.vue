<template>
  <div>
    <Information />
    <div class="body">
      <Catalog class="catalog" @function-click="onFunctionClick" />
      <div class="function" v-show="funId !== ''">
        <FunIndex :id="funId" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import Component from 'vue-class-component'
import Information from '@/components/Information'
import Catalog from '@/components/Catalog'
import FunIndex from '@/components/function/Index.vue'

@Component({
  components: {
    Information,
    Catalog,
    FunIndex
  }
})
export default class Home extends Vue {
  funId = ""

  onFunctionClick(id) {
    this.funId = id;
  }
}
</script>

<style scoped lang="scss">
  .body {
    position: fixed;
    display: flex;
    align-items: flex-start;
    top: 40px;
    width: calc(100% - 15px);
    height: calc(100% - 40px);
  }

  .catalog {
    height: 100%;
    overflow: auto;
    padding: 0px;
  }

  .function {
    flex: 1;
    height: 100%;
    overflow: auto;
    padding-left: 20px;
  }
</style>
