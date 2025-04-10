<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    namne: 'Botao',
    props: {
        desabilitado: {type: Boolean, required: true},
        icone: {type: String, required: true},
        texto: {type: String, required: true}
    },
    methods: {
        clicado() {
            this.$emit('clicado')
        }
    },
    emits: ['clicado'],
})

</script>

<template>
    <button class="button" @click="clicado" :disabled="desabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{texto}}</span>
    </button>
</template>
