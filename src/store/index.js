import Vuex from 'vuex';
import Vue from 'vue';
import createLogger from 'vuex/dist/logger'
import trade from './trade.js'

Vue.use(Vuex);

let opts = {
    modules: {
        trade
    },
    strict: true
};

if (process.env.NODE_ENV == 'development') {
    opts['plugins'] = [createLogger()];
}

const store = new Vuex.Store(opts);

export default store;

