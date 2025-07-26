import { createStore } from 'vuex'

export default createStore({
  state: {
    // aquí pones tus datos globales, por ejemplo:
    // user: null,
    // isLoggedIn: false
  },
  getters: {
    // funciones para leer datos derivados del estado
  },
  mutations: {
    // funciones síncronas para cambiar el estado
  },
  actions: {
    // funciones asíncronas que pueden llamar mutations
  },
  modules: {
    // puedes dividir tu store en módulos más pequeños
  }
})
