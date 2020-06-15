<template>
  <div class="book-detail">
    <cv-inline-notification
      v-if="successfullyUpdated"
      class="book-updated"
      kind="success"
      title="Kniha bola aktualizovaná"
      close-aria-label="Zavriet"
    >
    </cv-inline-notification>
    <h1>Detail knihy</h1>
    <cv-text-input
      label="Názov"
      @input="onTitleChange"
      :value="bookDetails.title"
    ></cv-text-input>
    <cv-text-input
      label="Autor"
      @input="onAuthorChange"
      :value="bookDetails.author"
    ></cv-text-input>
    <cv-text-input
      label="Vydane"
      @input="onPublishedChange"
      :value="(bookDetails.published || '').toString()"
    ></cv-text-input>
    <cv-button
      class="update-book"
      kind="primary"
      @click="onUpdateBook"
      label="Aktualizuj záznam"
    >
      Aktualizuj záznam
    </cv-button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { CvTextInput, CvButton, CvInlineNotification } from "@carbon/vue";
import { DATA_STATES } from "../../store/books";

export default {
  name: "BookDetails",
  data: () => ({
    title: "",
    author: "",
    published: ""
  }),
  components: {
    CvTextInput,
    CvButton,
    CvInlineNotification
  },
  mounted() {
    this.fetchBookDetails({
      id: this.$route.params.id
    });
  },
  methods: {
    onTitleChange(value) {
      this.title = value;
    },
    onAuthorChange(value) {
      this.author = value;
    },
    onPublishedChange(value) {
      this.published = value;
    },
    onUpdateBook() {
      this.updateBook({
        book: {
          id: this.bookDetails.id,
          title: this.title || this.bookDetails.title,
          author: this.author || this.bookDetails.author,
          published: this.published || this.bookDetails.published
        }
      });
    },
    ...mapActions("booksStore", ["updateBook", "fetchBookDetails"])
  },
  computed: {
    successfullyUpdated() {
      return DATA_STATES.updated === this.dataState;
    },
    isLoading() {
      return DATA_STATES.loading === this.dataState;
    },
    ...mapState({
      dataState: state => state.booksStore.dataState,
      bookDetails: state => state.booksStore.bookDetails
    })
  }
};
</script>

<style lang="scss" scoped>
.book-detail {
  padding-top: 100px;
}
</style>
