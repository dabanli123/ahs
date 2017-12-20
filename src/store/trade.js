import util from '../utils/index.js';
import {
  M_GET_CITY,
  M_GET_PICKUP_TYPE,
  M_UPDATE_SUBMITINFO,
  M_GET_SHOPLIST,
  M_ONDOOR_TIME,
  M_EXPRESS_TIME,
  M_GET_USERINFO,
  M_GET_LOCATION
} from './mutation-types';

import {
  A_GET_CITY,
  A_GET_PICKUP_TYPE,
  A_GET_SHOPLIST,
  A_ONDOOR_TIME,
  A_EXPRESS_TIME,
  A_GET_MSG_CODE,
  A_SET_LOGIN,
  A_GET_USERINFO,
  A_SUBMIT_ORDER,
  A_GET_LOCATION
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
    expressDate: null,
    mobile: '',
    street:'莱阳新家园',
    house:'利津路185弄',
    contact:'测试',
    customerExpress:1,
    regiontext:'abc',
    address:'bbc',
    regionId:3,
    from:'自购'
  },
  shoplist: [],
  ondoorTime: [],
  expressTime: [],
  userinfo: null,
  location:null
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
  [M_GET_USERINFO]: (state, items) => {
    state.userinfo = items;
  },
  [M_GET_LOCATION]: (state, items) => {
    state.location = items;
  }

}
/*
 const opts = {
        url: `/portal-api/order/submit`,
        method: 'POST',
        params: { ...args }
    }

*/
const actions = {
  [A_GET_LOCATION]: async ({ commit, state }, items) => {
   
    let res;
    try {
      res = await util.getLocation();
    } catch (error) {
      console.log(error);
      return;
    }

    commit(M_GET_LOCATION, res);
  },
  [A_SUBMIT_ORDER]: async ({ commit, state }, items) => {
    const opts = {
      url: '/portal-api/order/submit',
      method: 'POST',
      data: items[0]
    }

    let res;
    try {
      res = await util.Request(opts, []);
    } catch (error) {
      console.log(error);
      items[1] && items[1](error);
      return;
    }
    items[1] && items[1](res);
  },
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
      expressTime: res[0].hourList[0]
    })
  },
  [A_GET_MSG_CODE]: async ({ commit, state }, items) => {
    let params = new URLSearchParams();

    params.append('mobile', items[0]);
    params.append('type', 'Login');

    if (items[1]) {
      params.append('imgCaptcha', items[1]);
    }

    const opts = {
      url: '/portal-api/captcha/sendsmscaptcha',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    }

    try {
      await util.Request(opts, []);
    } catch (error) {
      console.log(error);
      items[2] && items[2](error);
      return;
    }
    items[2] && items[2]();
  },
  [A_SET_LOGIN]: async ({ commit, state }, items) => {
    let params = new URLSearchParams();

    for (let item in items) {

      params.append(item, items[item]);
    }

    const opts = {
      url: '/portal-user/account/loginbycaptcha',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    }

    try {
      return await util.Request(opts, []);
    } catch (error) {
      console.log(error);
      return;
    }
  },
  [A_GET_USERINFO]: async ({ commit, state }, items) => {
    const opts = {
      url: '/portal-api/user',
    }

    let res;

    try {
      res = await util.Request(opts)
    } catch (e) {
      console.error(e);
      return;
    }

    commit(M_GET_USERINFO, res);
    commit(M_UPDATE_SUBMITINFO, {
      mobile: res ? res.mobile : ''
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