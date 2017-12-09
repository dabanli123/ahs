import util from '../utils/index.js';
import {
 M_GET_CITY,
 M_GET_PICKUP_TYPE,
 M_UPDATE_SUBMITINFO,
 M_GET_SHOPLIST
} from './mutation-types';

import {
  A_GET_CITY,
  A_GET_PICKUP_TYPE,
  A_GET_SHOPLIST
} from './action-types';


const state = {
  cityInfo:null,
  pickuptype:[],
  submitInfo:{
    pickuptype:0,
    city:0,
    chooseshop:null
  },
  shoplist:[]
};

const mutations = {
  [M_GET_CITY]:(state, items) => {
    state.cityInfo = items;
  },
  [M_GET_PICKUP_TYPE]:(state, items) => {
    state.pickuptype = items;
  },
  [M_UPDATE_SUBMITINFO]:(state, items) => {
    state.submitInfo = {...state.submitInfo, ...items};
  },
  [M_GET_SHOPLIST]:(state, items) => {
    state.shoplist = items;
  },


}
/*
`/portal-api/city/${cityid}/shop`
*/
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
  },
  [A_GET_PICKUP_TYPE]:async({ commit, state }, items) => {

    const opts = {
      url: `/portal-api/city/${items.id}/pickuptype?${items.keys}`,
    }

    let res;

    try {
      res = await util.Request(opts)
    }catch(e) {
      console.error(e);
      return;
    }
    
    res = res.sort((a, b) => a< b ? 1 : -1).filter( v => v != 2);
    commit(M_GET_PICKUP_TYPE, res);
    commit(M_UPDATE_SUBMITINFO,{
      pickuptype:res[0]
    })
  },
  [A_GET_SHOPLIST]:async({ commit, state }, items) => {
    
        const opts = {
          url: `/portal-api/city/${items}/shop`,
        }
    
        let res;
    
        try {
          res = await util.Request(opts)
        }catch(e) {
          console.error(e);
          return;
        }
        
        commit(M_GET_SHOPLIST, res);
        commit(M_UPDATE_SUBMITINFO,{
          chooseshop:res[0]
        })
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