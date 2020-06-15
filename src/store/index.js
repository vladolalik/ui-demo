import Vue from "vue";
import Vuex from "vuex";
import getTest from "./test/index";
import booksStore from "./books/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    getTest,
    booksStore
  }
});
