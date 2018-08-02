import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const frame = resolve => require(['../views/frame.vue'], resolve);

const routes = [{
    path: '/frame',
    name: 'frame',
    component: frame
}];

export const router = new VueRouter({
    routes
});