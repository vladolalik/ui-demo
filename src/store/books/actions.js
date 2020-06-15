import { DATA_STATES } from ".";
import { DEFAULT_API_URL } from "../../config";
import Axios from "axios";

const actions = {
  async fetchBooks({ commit }) {
    commit("setLoadingDataState");
    try {
      const { data } = await Axios.get(`${DEFAULT_API_URL}/api/v1/books`, {
        headers: { "Content-Type": "application/json" }
      });
      console.log(data);
      commit("setBooks", data);
    } catch (e) {
      console.error(e);
    }
  },
  async fetchBookDetails({ commit }, { id }) {
    commit("setLoadingDataState");
    try {
      const { data } = await Axios.get(
        `${DEFAULT_API_URL}/api/v1/books/${id}`,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(data);
      commit("setBookDetails", data);
    } catch (e) {
      console.error(e);
    }
  },
  async updateBook({ commit }, { book }) {
    try {
      const { data } = await Axios.put(
        `${DEFAULT_API_URL}/api/v1/books`,
        book,
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      console.log(data);
      commit("setBookDetails", data);
      commit("setDataState", DATA_STATES.updated);
    } catch (e) {
      console.error(e);
    }
  }
};

export default actions;
