<template>
  <div class="panel">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <el-button>HELLO WORLD</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App hello world" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { ElButton } from "element-plus";

export default {
  name: "App",
  components: {
    HelloWorld,
    ElButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.panel {
  height: 200px;
  width: 1000px;
}
</style>
