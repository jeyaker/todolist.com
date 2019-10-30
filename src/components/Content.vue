<template>
  <div class="content">
    <input type="text" @keyup.enter="addItem" v-show="input_display" />
    <div class="card" v-for="(todo) in todos" :key="todo.id">
      <div class="card-content">
        <div class="card-content-inner">{{ todo.task }}</div>
        <div class="btn pull-right">
          <button
            class="button button-success"
            :class="{'button-fill':todo.done}"
            @click="changeDone(todo.id)"
          >
            <i class="icon icon-check"></i>
          </button>
          <button class="button button-danger" @click="removeTodo(todo.id)">
            <i class="icon icon-remove"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  data() {
    return {
      input_display: false
    };
  },
  props: ["todos"],
  methods: {
    changeDone(id) {
      this.$emit("change_done", id);
    },
    removeTodo(id) {
      this.$emit("remove_todo", id);
    },
    addItem(e) {
      let reg = /^\s+$/;
      if (e.target.value && !reg.test(e.target.value)) {
        this.$emit("add_item", e.target.value);
        this.input_display = !this.input_display;
      }
      e.target.value = "";
    }
  },
  mounted() {
    let that = this;
    bus.$on("changeInput", function() {
      that.input_display = !that.input_display;
    });
  }
};
</script>

<style lang="stylus" scoped>
.content {
  margin-bottom: 115px;

  input {
    margin-top: 10px;
  }

  .card-content {
    overflow: hidden;
    padding: 10px;

    .btn {
      display: flex;

      button {
        margin: 5px;
      }
    }
  }
}
</style>