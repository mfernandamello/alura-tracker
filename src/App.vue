<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from "./components/BarraLateral.vue";
import Notificaoes from './components/Notificaoes.vue';

export default defineComponent({
  name: 'App',
  data() {
    return{
    }
  },
  methods: {
  },
  components: {BarraLateral, Notificaoes},
})
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <Notificaoes/>
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped>  
.lista{
  padding: 1.25rem;
}

</style>
