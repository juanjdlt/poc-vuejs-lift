<template>
  <div>
    <h1 class="mb-2">BIENVENIDOS!</h1>
    <p>{{ currentMillis }}</p>
  </div>
</template>

<script>
  export default {
    pageTitle: 'Home | SPA',
    data () {
      return {
        currentMillis: "Hee"
      }
    }
  }

</script>

