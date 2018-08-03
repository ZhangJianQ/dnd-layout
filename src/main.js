import Vue from 'vue';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';

import { router } from './router';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueResource);

//挂载
new Vue({
    router
}).$mount('#app');