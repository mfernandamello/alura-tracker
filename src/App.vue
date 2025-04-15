<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent({
  name: 'App',
  data() {
    return{
    }
  },
  methods: {
  },
  components: {BarraLateral},
})
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped>  
.lista{
  padding: 1.25rem;
}

</style>
