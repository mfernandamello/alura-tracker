<script lang="ts"> 
import { computed, defineComponent } from 'vue'
import Temporizador from './Temporizador.vue';
import { key } from '@/store/index';
import { useStore } from 'vuex';
import { NOTIFICAR } from '@/store/mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';


export default defineComponent({
    name: 'Formulario',
    components: {Temporizador},
    data() {
        return{
            descricao: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa(tempoEmSegundos: number) {
            const projeto = this.projetos.find(proj => proj.id === this.idProjeto)
            if(!projeto){
                this.store.commit(NOTIFICAR, {
                    titulo: 'Tarefa não cadastrada',
                    texto: 'Selecione um projeto para cadastrar a tarefa!',
                    tipo: TipoNotificacao.FALHA
                })
                return
            }

            this.$emit('aoSalvarTarefa', {
                descricao:this.descricao,
                duracaoEmSegundos: tempoEmSegundos,
                projeto: projeto
            })
            this.descricao = ''
        }
    },
    emits: ['aoSalvarTarefa'],
    setup () {
        const store = useStore(key)
        return{
            projetos: computed(() => store.state.projetos),
            store
        }
    }
})  
</script>

<template>
    <div class="box">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Fomulario para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa deseja inicial?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option>Selecione um projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>