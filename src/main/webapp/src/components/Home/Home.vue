<template>
  <div>
    <h1 class="mb-2">BIENVENIDOS!</h1>
    <h2>{{ name }}</h2>
    <p>Links</p>
    https://vuejs-templates.github.io/webpack/structure.html  
  
  </div>
</template>

<script>  
  export default {
    data () {
      return {
            pageTitle: 'SPA | Home Page',

        name: 'Listeros'
      }
    }
  }
</script>