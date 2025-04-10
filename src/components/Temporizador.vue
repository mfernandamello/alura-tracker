<script lang="ts">
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue'
import Botao from './Botao.vue'

export default defineComponent({
    name: 'Temporizador',
    data() {
        return{
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos +=1
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)//usado para parar uma função q é executada a cada x milissegundos
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0;
        }
    },
    emits: ['aoTemporizadorFinalizado'],
    components: {Cronometro, Botao}
})  
</script>

<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
        <Botao @clicado="iniciar" :desabilitado="cronometroRodando" icone="fas fa-play" texto="play"/>
        <Botao @clicado="finalizar" :desabilitado="!cronometroRodando" icone="fas fa-stop" texto="stop"/>
    </div>
</template>