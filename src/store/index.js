import Vue from 'vue'
import Vuex from 'vuex'
import Pet from "../models/Pet";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pets: [
            new Pet(1, 'chien', 'Milou'),
            new Pet(2, 'chien', 'Idéfix'),
            new Pet(3, 'chat', 'Gardfiel'),
            new Pet(4, 'chien', 'Snoopy'),
        ],
    },
    getters: {
        getTodoById: (state) => (id) => {
            return state.pets.find(pet => pet.id == id)
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
