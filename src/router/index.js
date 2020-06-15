import Vue from "vue";
import VueRouter from "vue-router";
import Books from "../pages/books/Books.vue";
import BookDetail from "../pages/bookDetail/BookDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "books",
    component: Books
  },
  {
    path: "/books/:id",
    name: "bookDetails",
    component: BookDetail
  }
];

const router = new VueRouter({
  routes
});

export default router;
