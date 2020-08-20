import Vue from 'vue'
import App from './App.vue'
import Cascader from './components/Cascader.vue'
import CascaderItem from './components/CascaderItem.vue'
import MoreItem from './components/MoreItem.vue'
import ReItem from './components/ReItem.vue'
Vue.config.productionTip = false

Vue.component('Cascader',Cascader)
Vue.component('CascaderItem',CascaderItem)
Vue.component('MoreItem',MoreItem)
Vue.component('ReItem',ReItem)
new Vue({
  render: h => h(App),
}).$mount('#app')
