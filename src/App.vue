<template>
  <div class="wrapper">
    <Header />
    <TodoList />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/organisms/Header.vue";
import TodoList from "@/components/organisms/TodoList";
import Footer from "@/components/organisms/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    TodoList,
    Footer
  },
  mounted() {
    this.$store.dispatch("getFromStorage");
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/styles";

body {
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    $firstGradient,
    $secondGradient,
    $checkboxBg
  );
  background-position: cover;
  background-repeat: no-repeat;
  position: relative;
  .wrapper {
    width: 80vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 556px) {
      #footer {
        display: flex;
        flex-direction: row;
      }
    }
    @media only screen and (min-width: 772px) {
      div.wrapper {
        width: 60vw;
      }
    }
    @media only screen and (min-width: 990px) {
      #wrapper {
        width: 50vw;
      }
    }
  }
}
</style>
