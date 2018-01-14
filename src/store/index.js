import Vuex from 'vuex';
import Vue from 'vue';
import createLogger from 'vuex/dist/logger'
import trade from './trade.js'
import inquiry from './inquiry.js'

Vue.use(Vuex);

let opts = {
    modules: {
        trade,
        inquiry
    },
    strict: true
};

if (process.env.NODE_ENV == 'development') {
    opts['plugins'] = [createLogger()];
}

const store = new Vuex.Store(opts);

export default store;

