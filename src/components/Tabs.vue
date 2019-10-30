<template>
  <div class="tabs">
    <ul>
      <li
        @click="changeType(tab.text)"
        class="circle"
        :class="[tab.class,type==tab.text&&'circle-fill']"
        v-for="tab in tabs"
        :key="tab.id"
      >{{ tab.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      tabs: [
        {
          id: 1,
          text: "A",
          class: "circle-success"
        },
        {
          id: 2,
          text: "F",
          class: "circle-primary"
        },
        {
          id: 3,
          text: "U",
          class: "circle-danger"
        }
      ]
    };
  },
  methods: {
    changeType(val) {
      this.$emit("change_type", val);
    }
  }
};
</script>
<style lang="stylus" scoped>
.tabs {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;

    li {
      width: 80px;
      height: 80px;
      text-align: center;
    }

    .circle {
      border-radius: 50%;
      border: 1px solid #ccc;
      line-height: 82px;
    }

    .circle.circle-success {
      border-color: green;
      color: green;
    }

    .circle.circle-primary {
      border-color: blue;
      color: blue;
    }

    .circle.circle-danger {
      border-color: red;
      color: red;
    }

    .circle.circle-success.circle-fill {
      background-color: green;
      color: white;
    }

    .circle.circle-primary.circle-fill {
      background-color: blue;
      color: white;
    }

    .circle.circle-danger.circle-fill {
      background-color: red;
      color: white;
    }
  }
}
</style>