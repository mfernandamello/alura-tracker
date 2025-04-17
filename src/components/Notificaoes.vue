<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Notificacoes'
})
</script>

<template>
    <div class="notificacao">
        <article class="message is-success">
            <div class="message-header">Atentação!</div>
            <div class="message-body">
                Aqui vai um texto legal
            </div>
        </article>
        <article class="message is-warning">
            <div class="message-header">Atentação!</div>
            <div class="message-body">
                Aqui vai um texto legal
            </div>
        </article>
        <article class="message is-danger">
            <div class="message-header">Atentação!</div>
            <div class="message-body">
                Aqui vai um texto legal
            </div>
        </article>
    </div>
</template>

<style scope>
.notificacao{
    position: absolute;
    z-index: 105;
    right: 0;
    width: 300px;
    padding: 8px;
}
</style>