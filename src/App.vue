<template>
  <a-layout id="app" class="wrapper">
    <a-layout-header class="wrapper__header">
      Header
    </a-layout-header>
    <a-layout-content class="wrapper__content">
      Content
      <HelloWorld/>
    </a-layout-content>
    <a-layout-footer class="wrapper__footer">
      Footer
    </a-layout-footer>
  </a-layout>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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
</style>
