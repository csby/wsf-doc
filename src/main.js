import Vue from 'vue'
import {
  Message,
  Input,
  Tree,
  Collapse,
  CollapseItem,
  Tabs,
  TabPane,
  Select,
  Option,
  Button,
  Badge,
  Loading,
  Dialog,
  Tooltip,
  Form,
  FormItem,
  InputNumber
} from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import router from './router'
import Network from '@/network/network'
import EvtBus from '@/events/bus'
import EvtIds from '@/events/evs'


Vue.use(VueClipboard)
Vue.use(Input)
Vue.use(Tree)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Badge)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(InputNumber)



Vue.prototype.network = Network
Vue.prototype.msgbox = Message
Vue.prototype.uris = Network.uris
Vue.prototype.bus = EvtBus
Vue.prototype.evs = EvtIds.evs

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
