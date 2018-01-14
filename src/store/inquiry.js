import util from '../utils/index.js';
import {
    M_GET_INQUIRY_RESULT,
    M_GET_COMMENTS
} from './mutation-types';

import {
    A_GET_INQUIRY_RESULT,
    A_GET_COMMENTS
} from './action-types';


const state = {
    productInfo: null,
    commentList: [],
    totalComment:0
};

const mutations = {
    [M_GET_INQUIRY_RESULT]: (state, items) => {
        state.productInfo = items;
    },
    [M_GET_COMMENTS]: (state, items) => {
        state.commentList = items.data;
        state.totalComment = items.totalCount;
    }
}

/**
 * // 获取报价信息
const getComments = async (pageIndex, pageSize, bool) => {
    const opts = {
        url: `/portal-api/user/comment/search?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    }

    if(bool) {
        return await Util.Request(opts, false, true);
    }else {
        return await Util.Request(opts);
    }
}
 * 
 */

const actions = {
    [A_GET_COMMENTS]: async ({ commit, state }, items) => {
        const opts = {
            url: `/portal-api/user/comment/search?pageIndex=${0}&pageSize=${10}`,
        }

        let res;

        try {
            res = await util.Request(opts, true)
        } catch (e) {
            console.error(e);
            return;
        }

        commit(M_GET_COMMENTS, res);
    },
    [A_GET_INQUIRY_RESULT]: async ({ commit, state }, items) => {
        const opts = {
            url: `/portal-api/inquiry/${items}`,
        }

        let res;

        try {
            res = await util.Request(opts)
        } catch (e) {
            console.error(e);
            return;
        }

        commit(M_GET_INQUIRY_RESULT, res);
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