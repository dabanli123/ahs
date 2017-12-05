import util from '../utils/index.js';
import {
 M_GET_CITY
} from './mutation-types';

import {
  A_GET_CITY
} from './action-types';


const state = {
  cityInfo:null
};

const mutations = {
  [M_GET_CITY]:(state, items) => {
    state.cityInfo = items;
  }
}

const actions = {
  [A_GET_CITY]:async({ commit, state }, items) => {
    const opts = {
      url: '/portal-api/user/city',
    }

    let res;

    try {
      res = await util.Request(opts)
    }catch(e) {
      console.error(e);
      return;
    }
    
    commit(M_GET_CITY, res);
  }
}

const getters = {
 
}

export default {
  state,
  actions,
  getters,
  mutations
}