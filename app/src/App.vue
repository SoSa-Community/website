<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto text-center">
          <img alt="Vue logo" src="./assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
      </div>
    </div>
  </div>
</template>
