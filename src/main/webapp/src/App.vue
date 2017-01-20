<template>
  <div id="app">
    <navigation></navigation>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

  <script>  
  export default {
    data () {
      return {
        name: 'Listeros'
      }
    }
  }
</script>
