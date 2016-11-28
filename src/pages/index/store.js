import * as types from '../../store/mutation';


const state = {
  indexMsg: 'Hello 123456'
};

const getters = {
  getIndexData: state => state.indexMsg
};

const actions = {
  /*
   * 设置首页消息
   * */
  SET_INDEXMSG: ({commit}, string) => {
    commit(types.SET_INDEXMSG, string)
  }
}

const mutations = {
  [types.SET_INDEXMSG] (state, string) {
    state.indexMsg = string
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
