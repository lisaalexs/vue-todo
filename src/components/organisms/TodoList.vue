<template>
  <div :class="$style.main">
    <TodoItem
      v-for="todo in showSortBtn"
      :key="todo.id"
      :taskTitle="todo.taskTitle"
      :isChecked="todo.isChecked"
      :id="todo.id"
    />
    <AddTodo />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "@/components/molecules/TodoItem";
import AddTodo from "@/components/atoms/AddTodo";
export default {
  computed: {
    ...mapGetters(["showSortBtn"])
  },
  components: {
    TodoItem,
    AddTodo
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles.scss";
.main {
  background-color: $mainBg;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1.5em;
}
</style>