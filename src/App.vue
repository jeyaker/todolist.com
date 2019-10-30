<template>
  <div id="app">
    <!-- Top组件 -- start -->
    <Top></Top>
    <!-- Top组件 -- end -->

    <!-- Con组件 -- start -->
    <Con :todos="newTodos" @add_item="addItem" @change_done="changeDone" @remove_todo="removeTodo"></Con>
    <!-- Con组件 -- end -->

    <!-- Ma组件 -- start -->
    <Ma v-show="ma_display" @remove="remove" @change_ma="changeMa" :todo_id="todo_id"></Ma>
    <!-- Ma组件 -- end -->

    <!-- Tabs组件 -- start -->
    <Tabs :type="type" @change_type="changeType"></Tabs>
    <!-- Tabs组件 -- end -->
  </div>
</template>

<script>
import Top from "Components/Top";
import Con from "Components/Content";
import Ma from "Components/Ma";
import Tabs from "Components/Tabs";

export default {
  components: {
    Top,
    Con,
    Ma,
    Tabs
  },
  data() {
    return {
      ma_display: false,
      todo_id: 0,
      type: "A",
      todos: [
        {
          id: 1,
          task: "任务一",
          done: true
        },
        {
          id: 2,
          task: "任务二",
          done: false
        },
        {
          id: 3,
          task: "任务三",
          done: false
        }
      ]
    };
  },
  computed: {
    newTodos() {
      switch (this.type) {
        case "A":
          return this.todos;
          break;
        case "F":
          return this.todos.filter(item => item.done);
          break;
        case "U":
          return this.todos.filter(item => !item.done);
          break;
        default:
          break;
      }
    }
  },
  methods: {
    changeDone(id) {
      this.todos.forEach((val, i) => {
        if (val.id == id) {
          val.done = !val.done;
        }
      });
    },
    removeTodo(id) {
      let flag = this.todos.filter(val => val.id == id)[0].done;
      this.todo_id = id;
      if (flag) {
        this.remove(id);
      } else {
        this.changeMa();
      }
    },
    remove(id) {
      this.todos.forEach((val, i) => {
        if (val.id == id) {
          this.todos.splice(i, 1);
        }
      });
    },
    changeMa() {
      this.ma_display = !this.ma_display;
    },
    addItem(val) {
      var id = 1;
      if (this.todos.length) {
        id = this.todos.sort((a, b) => b.id - a.id)[0].id + 1;
      }
      this.todos.push({
        id: id,
        task: val,
        done: false
      });
      this.todos.sort((a, b) => a.id - b.id);
    },
    changeType(val) {
      this.type = val;
    }
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
