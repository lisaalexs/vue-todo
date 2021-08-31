<template>
  <div :class="$style.footer">
    <p>{{todosCompleted}}/ {{todosLength}} left</p>
    <div :class="$style.tasksChoice">
      <SortBtn
        v-for="btn in sortBtn"
        :key="btn.id"
        :title="btn.type"
        :isPicked="btn.isPicked"
        :id="btn.id"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SortBtn from "@/components/molecules/SortBtn";

export default {
  computed: {
    ...mapGetters(["sortBtn", "todosLength", "todosCompleted"])
  },
  components: {
    SortBtn
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles.scss";

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $headerFooterBG;
  padding: 0 1.5em;
  color: $footerText;
  font-weight: 600;
  font-size: 1.2rem;
  .tasksChoice {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 556px) {
    div.tasksChoice {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>