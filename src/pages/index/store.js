import * as types from '../../store/mutation';
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const state = {
  indexMsg: 'Hello 123456',
  biologyList: [],
  listApi: '/api/list',
  bioend: 10,
  bioload: false,
  biofinished: false
};

const getters = {
  getIndexData: state => state.indexMsg,
  getBioEnd: state => state.bioend,
  getBioLoad: state => state.bioload,
  getBioFinished: state => state.biofinished,
  getBiologyList : state => state.biologyList,
};

const actions = {
  /*
   * 设置首页消息
   * */
  SET_INDEXMSG: ({commit}, string) => {
    commit(types.SET_INDEXMSG, string)
  },

  SET_BIOEND: ({commit}, num) => {
    commit(types.SET_BIOEND, num)
  },

  SET_BIOLOAD: ({commit}, boolean) => {
    commit(types.SET_BIOLOAD, boolean)
  },

  SET_BIOFINISHED: ({commit}, boolean) => {
    commit(types.SET_BIOFINISHED, boolean)
  },

  SET_BIOLOGYLIST: ({commit}, start) => {
      var url = state.listApi
      Vue.http.get(url, {
        params: {
          start: start,
          size: 10,
          object: 'biologylist'
        }
      }).then(function (response) {
        commit(types.SET_BIOLOGYLIST, response)
      })
  }

}

const mutations = {

  [types.SET_INDEXMSG] (state, string) {
    state.indexMsg = string
  },

  [types.SET_BIOEND] (state, boolean) {
    state.bioend = boolean
  },

  [types.SET_BIOLOAD] (state, num) {
    state.bioload = num
  },


  [types.SET_BIOFINISHED] (state, boolean) {
    state.biofinished = boolean
  },

  [types.SET_BIOLOGYLIST] (state, response) {
    state.biologyList = state.biologyList.concat(response.data.data.results)
    //console.log(state.biologyList);
  },

};

export default {
  state,
  actions,
  mutations,
  getters
}
