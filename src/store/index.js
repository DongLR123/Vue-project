import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curmenu:{
      name:'电影',
      bgcolor:'red'
    },
    photoList:[]
  },
  mutations: {
    setcurmenu(state,data){
      state.curmenu=data
    },
    setphotoList(state,data){
      state.photoList=data
    }
  },
  actions: {
  },
  modules: {
  }
})
