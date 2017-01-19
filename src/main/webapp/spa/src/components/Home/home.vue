<template>
  <div>
    <h1 class="mb-2">BIENVENIDOS!</h1>
    <h2>{{ name }}</h2>
   
    <div class="form">
       <p> El siguiente Form envia una cadena de texto cualquier y la concatena el currentMillis del servidor REST  </p>
      <input v-model="message" placeholder="ingresa el texto" v-on:keyup.enter="sendText">
      <button :disabled="isProcessing" v-on:click="sendText">{{buttonName}}</button>
      <pre>El resultado es: {{result}}</pre>
    </div>
  
  </div>
</template>

<script>
  
  export default {
    pageTitle: 'SPA | Home Page',
    data () {
      return {
        name: 'Listeros',
        message: '',
        buttonName: 'enviar',
        isProcessing: false
      }
    },
    methods: {
      sendText: function () {
        var value = this.message.trim()
        if (!value) {
          return
        }

        this.isProcessing = true
        this.buttonName = 'enviando...'

        this.$http.post('message', {msg: value}).then((response) => {
          this.message = ''
          this.result = response.body.data
          this.isProcessing = false
        }, (response) => {
          this.message = ''
          this.result = response.statusText
          this.isProcessing = false
          this.buttonName = 'enviar'
        });
       
      }
    }
  }

</script>

<style>
  .form {
    margin-top: 10px;
  }
</style>

