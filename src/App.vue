<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from "./components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from './components/Tarefa.vue';
import type ITarefa from './interfaces/ITarefa';
import Box from './components/Box.vue';

export default defineComponent({
  name: 'App',
  data() {
    return{
      tarefas: [] as ITarefa[]
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  },
  components: {BarraLateral, Formulario, Tarefa, Box},
})
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <Formulario @ao-salvar-tarefa="salvarTarefa"/>
      <div class="lista" v-if="tarefas.length">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>  
      <Box v-else>
        Voce nn esta produtivo hj!
      </Box>
    </div>
  </main>
</template>

<style scoped>  
.lista{
  padding: 1.25rem;
}

</style>
