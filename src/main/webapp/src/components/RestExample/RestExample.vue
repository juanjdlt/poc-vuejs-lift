<template>
  <div class="example" style="margin-top: 10px">
    <p> El siguiente Form envia una cadena de texto cualquier y la concatena el currentMillis del servidor REST</p>
    <input placeholder="ingresa el texto" v-model="message" v-on:keyup.enter="sendText">
    <button :disabled="isProcessing" v-on:click="sendText">{{buttonName}}</button>
    <pre>El resultado es: {{result}}</pre>
  </div>
</template>

<script>  
  export default {
    data () {
      return {
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