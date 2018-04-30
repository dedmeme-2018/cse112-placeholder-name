<template>
  <div id="app">
    <PeterDemo/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PeterDemo from './components/PeterDemo'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PeterDemo
  },

  data () {
    return {
    }
  },

  computed: {
  },
  created () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
