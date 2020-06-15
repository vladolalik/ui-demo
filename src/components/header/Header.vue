<template>
  <cv-header aria-label="Carbon header">
    <cv-header-name href="javascript:void(0)" prefix="MVSR" class="header-name">
      [Platform]
    </cv-header-name>
    <cv-header-nav aria-label="Carbon nav">
      <cv-header-menu-item href="/" class="book-list-menu-item">
        Zoznam kníh
      </cv-header-menu-item>
    </cv-header-nav>
  </cv-header>
</template>
<script>
import {
  CvHeader,
  CvHeaderName,
  CvHeaderMenuItem,
  CvHeaderNav
} from "@carbon/vue";
export default {
  name: "Header",
  components: {
    CvHeader,
    CvHeaderNav,
    CvHeaderName,
    CvHeaderMenuItem
  }
};
</script>
<style>
.cv-text-input {
  margin: 30px 0;
}
</style>
