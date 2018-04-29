import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

new Vue(Vue.util.extend({ router })).$mount('#app');

import app from './app.js';
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

import coloritem from './components/coloritem.js';

const routes = [
  {
        name: 'coloritem',
        path: '/',
        component: coloritem
    }
];

const router = new VueRouter({ mode: 'history', routes: routes});
