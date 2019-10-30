<template>
  <div class="ma">
    <div @click="changeMa" class="ma-bg"></div>
    <div class="ma-con">
      <p>是否删除？</p>
      <button @click="removeTodo" class="pull-right button button-primary">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo_id"],
  methods: {
    changeMa() {
      this.$emit("change_ma");
    },
    removeTodo() {
      this.changeMa();
      this.$emit("remove", this.todo_id);
    }
  }
};
</script>

<style lang="stylus" scoped>
.ma {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 101;

  .ma-bg {
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
  }

  .ma-con {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1001;
    background-color: #fff;
    width: 80%;
    height: 115px;
    border-radius: 10px;
    padding: 10px;
    overflow: hidden;
  }
}
</style>