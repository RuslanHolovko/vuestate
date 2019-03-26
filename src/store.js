import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    title: "Hello man",
    links: [
      'link1',
      'link2',
      'link3',
    ]

  },
  getters: {
    countLinks: function(state) {
      return state.links.length
    }

  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    }

  },
  actions: {

  },

})
