<script lang="ts"> 
import { defineComponent } from 'vue'
import Temporizador from './Temporizador.vue';

export default defineComponent({
    name: 'Formulario',
    components: {Temporizador},
    data() {
        return{
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoEmSegundos: number) {
            this.$emit('aoSalvarTarefa', {descricao:this.descricao, duracaoEmSegundos: tempoEmSegundos})
            this.descricao = ''
        }
    },
    emits: ['aoSalvarTarefa']
})  
</script>

<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Fomulario para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa deseja inicial?" v-model="descricao">
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>