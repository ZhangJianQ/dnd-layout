import Vue from 'vue';
import ElementUI from 'element-ui';

import { router } from './router';

Vue.use(ElementUI);

//挂载
new Vue({
    router
}).$mount('#app');