<template>
  <header class="bar bar-nav">
    <a class="icon icon-star pull-left"></a>
    <a @click="changeInput" class="icon icon-edit pull-right"></a>
    <h1 class="title">jeyaker</h1>
  </header>
</template>

<script>
import bus from "../bus";
export default {
  methods: {
    changeInput() {
      bus.$emit("changeInput");
    }
  }
};
</script>

<style lang="stylus" scoped></style>