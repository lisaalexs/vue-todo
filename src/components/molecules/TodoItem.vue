<template>
  <div :class="$style.todoItem">
    <label :class="$style.customCheckbox" class="checkboxLabel">
      <input type="checkbox" :checked="isChecked" @click="change" class="checkB" />
      <span class="taskTitle">{{ taskTitle }}</span>
    </label>
    <div :class="$style.close" @click="remove"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TodoItem",
  props: {
    taskTitle: String,
    isChecked: Boolean,
    id: Number
  },
  methods: {
    ...mapMutations(["removeTodo", "changeTodoStatus"]),
    remove() {
      this.removeTodo(this.id);
    },
    change() {
      this.changeTodoStatus(this.id);
    }
  }
};
</script>

<style lang='scss' module>
@import "@/assets/styles/styles.scss";

.todoItem {
  height: 5vh;
  width: 100%;
  padding: 1.4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: $todoBg;
  margin: 0 auto;
  .customCheckbox {
    & > input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    & > span {
      display: inline-flex;
      align-items: center;
      color: $headerTitle;
      font-weight: 400;
      font-size: 1.5rem;
      cursor: pointer;
    }
    & > span::before {
      content: "";
      display: inline-block;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid $checkboxBg;
      border-radius: 0.25em;
      margin-right: 1.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
    & > input:not(:disabled):not(:checked) + span:hover::before {
      box-shadow: 0 0 0 0.1rem $checkboxBg;
    }
    & > input:not(:disabled):active + span::before {
      border-color: $checkboxBg;
    }
    & > input:checked + span::before {
      background-color: $checkboxBg;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    & > input:disabled + span::before {
      border-color: $checkboxBg;
    }
  }
  .close {
    height: 24px;
    width: 24px;
    background-color: $todoBg;
    border-radius: 5px;
    position: relative;
    border: 2px solid $headerFooterBG;
    &:after {
      position: absolute;
      top: -40px;
      bottom: 0;
      left: 0;
      right: 0;
      content: "\d7";
      font-size: 27px;
      color: $headerFooterBG;
      line-height: 100px;
      text-align: center;
      cursor: pointer;
    }
    &:hover {
      border-color: $close;
    }
    &:hover:after {
      color: $close;
    }
  }
}
</style>