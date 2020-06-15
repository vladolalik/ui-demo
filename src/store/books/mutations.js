import { DATA_STATES } from ".";

const mutations = {
  setLoadingDataState(state) {
    state.dataState = DATA_STATES.loading;
    state.books = [];
    state.bookDetails = {};
  },
  setDataState(state, dataState) {
    state.dataState = dataState;
  },
  setBooks(state, books) {
    state.dataState = DATA_STATES.success;
    state.books = books;
  },
  setBookDetails(state, details) {
    state.dataState = DATA_STATES.success;
    state.bookDetails = details;
  }
};

export default mutations;
