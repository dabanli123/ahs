import util from '../utils/index.js';
import {
  M_GET_CITY,
  M_GET_PICKUP_TYPE,
  M_UPDATE_SUBMITINFO,
  M_GET_SHOPLIST,
  M_ONDOOR_TIME,
  M_EXPRESS_TIME
} from './mutation-types';

import {
  A_GET_CITY,
  A_GET_PICKUP_TYPE,
  A_GET_SHOPLIST,
  A_ONDOOR_TIME,
  A_EXPRESS_TIME
} from './action-types';


const state = {
  cityInfo: null,
  pickuptype: [],
  submitInfo: {
    pickuptype: 0,
    city: 0,
    chooseshop: null,
    ondoorTime: null,
    expressTime: null,
    expressDate:null
  },
  shoplist: [],
  ondoorTime: [],
  expressTime:[]
};

const mutations = {
  [M_GET_CITY]: (state, items) => {
    state.cityInfo = items;
  },
  [M_GET_PICKUP_TYPE]: (state, items) => {
    state.pickuptype = items;
  },
  [M_UPDATE_SUBMITINFO]: (state, items) => {
    state.submitInfo = { ...state.submitInfo, ...items };
  },
  [M_GET_SHOPLIST]: (state, items) => {
    state.shoplist = items;
  },
  [M_ONDOOR_TIME]: (state, items) => {
    state.ondoorTime = items;
  },
  [M_EXPRESS_TIME]: (state, items) => {
    state.expressTime = items;
  },


}
/*
 url: `/portal-api/city/pickupdates/${id}`,
 url: `/portal-api/order/express/datelist`,
*/
const actions = {
  [A_GET_CITY]: async ({ commit, state }, items) => {
    const opts = {
      url: '/portal-api/user/city',
    }

    let res;

    try {
      res = await util.Request(opts)
    } catch (e) {
      console.error(e);
      return;
    }

    commit(M_GET_CITY, res);
  },
  [A_GET_PICKUP_TYPE]: async ({ commit, state }, items) => {

    const opts = {
      url: `/portal-api/city/${items.id}/pickuptype?${items.keys}`,
    }

    let res;

    try {
      res = await util.Request(opts)
    } catch (e) {
      console.error(e);
      return;
    }

    res = res.sort((a, b) => a < b ? 1 : -1).filter(v => v != 2);
    commit(M_GET_PICKUP_TYPE, res);
    commit(M_UPDATE_SUBMITINFO, {
      pickuptype: res[0]
    })
  },
  [A_GET_SHOPLIST]: async ({ commit, state }, items) => {

    const opts = {
      url: `/portal-api/city/${items}/shop`,
    }

    let res;

    try {
      res = await util.Request(opts)
    } catch (e) {
      console.error(e);
      return;
    }

    commit(M_GET_SHOPLIST, res);
    commit(M_UPDATE_SUBMITINFO, {
      chooseshop: res[0]
    })
  },
  [A_ONDOOR_TIME]: async ({ commit, state }, items) => {

    const opts = {
      url: `/portal-api/city/pickupdates/${items}`,
    }

    let res;

    try {
      res = await util.Request(opts)
    } catch (e) {
      console.error(e);
      return;
    }
    res = res.filter(v => v.enabled);
    commit(M_ONDOOR_TIME, res);
    commit(M_UPDATE_SUBMITINFO, {
      ondoorTime: res[0]
    })
  },
  [A_EXPRESS_TIME]: async ({ commit, state }, items) => {
    
        const opts = {
          url: `/portal-api/order/express/datelist`,
        }
    
        let res;
    
        try {
          res = await util.Request(opts)
        } catch (e) {
          console.error(e);
          return;
        }
        res = res.filter(v => v.enable);
        res.forEach(element => {
          element.hourList = element.hourList.filter(v => v.enable);
        });
        commit(M_EXPRESS_TIME, res);
        commit(M_UPDATE_SUBMITINFO, {
          expressDate: res[0],
          expressTime:res[0].hourList[0]
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