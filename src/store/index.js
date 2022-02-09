import { Value } from 'sass'
import { createStore } from 'vuex'

export default createStore({
  state: {
    pizzas:[],
    category: null
  },
  mutations: {
    SET_PIZZAS(state,json) {
      state.pizzas = json
    },
    SET_CATEGORY(state,value) {
      state.category = value
    }
  },
  actions: {
    async getPizzas(context) {
      const response = await fetch('http://localhost:3000/pizzas')
      const json = await response.json()


      context.commit('SET_PIZZAS',json)
    },
    async setCategory(context,value) {
      const query = value !==null ? `?category=${value}`:""


      const response = await fetch(`http://localhost:3000/pizzas${query}`)
      const json = await response.json()


      context.commit('SET_PIZZAS',json)
      context.commit('SET_CATEGORY',value)
  },
},
  modules: {
  }
})
