import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pets:[
      {
        id: 1,
        name: 'yoyo',
        race: 'chat'
      },{
        id: 2,
        name: 'yaya',
        race: 'chien'
      },
    ]
  },
  getters: {
    getPetById: state=> function(id){
      for (const pet of state.pets) {
        if(pet.id==id) return pet; 
      }
    }
  },
  mutations: {
    addPet(state,pet){
      pet.id = state.pets.length+1;
      state.pets.push(pet);
    },
    editPet(state,pet){
      state.pets[pet.id-1] = pet;
    }
  },
  actions: {
  },
  modules: {
  }
})
