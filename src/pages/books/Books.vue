<template>
  <div class="books-container">
    <cv-loading :active="isLoading" :overlay="true"> </cv-loading>
    <h1>Knižnica</h1>
    <div class="book-list">
      <cv-tile
        v-for="book in books"
        :key="book.id"
        kind="expandable"
        :expanded="false"
      >
        <h4>{{ book.title }}</h4>
        <p>{{ book.author }}</p>
        <template slot="below"
          ><p>Detail</p>
          <ul class="book-detail">
            <li>
              Vydané v roku: <strong>{{ book.published }}</strong>
            </li>
            <li><router-link :to="`/books/${book.id}`">Edit</router-link></li>
          </ul>
        </template>
      </cv-tile>
    </div>
  </div>
</template>

<script>
import { CvLoading, CvTile } from "@carbon/vue";
import { mapActions, mapState } from "vuex";
import { DATA_STATES } from "../../store/books/";
export default {
  components: {
    CvLoading,
    CvTile
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    ...mapActions("booksStore", ["fetchBooks"])
  },
  computed: {
    isLoading() {
      return DATA_STATES.loading === this.dataState;
    },
    ...mapState({
      dataState: state => state.booksStore.dataState,
      books: state => state.booksStore.books
    })
  }
};
</script>

<style lang="scss" scoped>
.books-container {
  padding-top: 40px;
}
.book-detail {
  padding-left: 30px;
}
</style>
