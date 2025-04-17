<script lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';


export default defineComponent({
    name: 'Notificacoes',
    data() {
        return{
            contexto: {
                [TipoNotificacao.SUCESSO]: 'is-success',
                [TipoNotificacao.ATENCAO]: 'is-warning',
                [TipoNotificacao.FALHA]: 'is-danger',
            }
        }
    },
    setup() {
        const store = useStore()
        return{
            notificacoes: computed(() => store.state.notificacoes),
        }
    }
})
</script>

<template>
    <div class="notificacao">
        <article v-for="notificacao in notificacoes" :key="notificacao.id" class="message" :class="contexto[notificacao.tipo]">
            <div class="message-header">{{ notificacao.titulo }}</div>
            <div class="message-body">
                {{notificacao.texto}}
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