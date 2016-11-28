/**
 * Created by yelingfeng on 2016/8/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    indexMsg: 'Hello 123456',
  },
  actions: {
    SET_INDEXMSG: ({commit},string) => {
      commit("SET_INDEXMSG", string)
    }
  },
  mutations: {
    SET_INDEXMSG: (state, string) => {
      console.log('string:' + string)
      state.indexMsg = string
    }
  },
  getters: {
    getIndexData:state => state.indexMsg
  }
})

export default store
