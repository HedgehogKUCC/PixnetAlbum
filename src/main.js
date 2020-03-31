import Vue from 'vue';
import {
  Row, Col, Card,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
