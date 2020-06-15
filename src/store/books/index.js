import actions from "./actions";
import mutations from "./mutations";

export const DATA_STATES = {
  init: "init",
  loading: "load",
  success: "success",
  fail: "fail",
  updated: "successUpdate"
};

const state = {
  dataState: "",
  books: [],
  bookDetails: {}
};

const booksStore = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default booksStore;
