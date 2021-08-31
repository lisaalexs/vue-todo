<template>
  <div :class="$style.header">to do list</div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang='scss' module>
@import "@/assets/styles/styles.scss";

.header {
  background-color: $headerFooterBG;
  padding: 1em;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: $headerTitle;
}
</style>