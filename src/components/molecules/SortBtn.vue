<template>
  <label :class="$style.tasksChoiceItem">
    <input type="radio" name="sortBtn" :checked="isPicked" @click="change" />
    <span>{{title}}</span>
  </label>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    title: String,
    isPicked: Boolean,
    id: Number
  },
  methods: {
    ...mapMutations(["changeBtnStatus"]),
    change() {
      this.changeBtnStatus(this.title);
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles.scss";

.tasksChoiceItem {
  display: flex;
  color: $footerText;
  & input[type="radio"] {
    display: none;
  }
  & span {
    display: flex;
    cursor: pointer;
    padding: 0px 15px;
    color: $footerText;
  }
  & input[type="radio"]:checked + span {
    border: 2px solid $footerText;
    border-radius: 7px;
  }
  & span:hover {
    border: 2px solid $footerText;
    border-radius: 7px;
  }
}
</style>