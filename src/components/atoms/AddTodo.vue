<template>
  <form @submit="onSubmit">
    <input
      type="text"
      :class="$style.textInput"
      placeholder="Type your todo here..."
      v-model="newInput"
    />
    <input type="submit" :class="$style.addTodo" value="Add a new task" />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      newInput: ""
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.newInput);
      this.newInput = "";
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles.scss";

form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  .textInput {
    width: 100%;
    padding: 0.8em;
    background-color: $addTodoBg;
    border: 2px solid $headerFooterBG;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      border: 3px solid $headerFooterBG;
    }
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $headerFooterBG;
      font-size: 1.3rem;
      text-align: center;
      font-weight: 700;
    }
  }
  .addTodo {
    width: 100%;
    padding: 0.8em;
    text-align: center;
    border: 3px dashed $headerFooterBG;
    border-radius: 10px;
    background-color: $addTodoBg;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>


