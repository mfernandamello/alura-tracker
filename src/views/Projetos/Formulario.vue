<script lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { notificacaoMixin } from '@/mixins/notificar';
import { useStore } from '@/store';
import { ADICIONA_PROJETO, EDITAR_PROJETO} from '@/store/mutacoes';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Formulario',
    props: {
        id: {type: String}
    },
    data() {
        return{
            nomeDoProjeto: '',
        }
    },
    mounted() {
        if(this.id){
            const projeto = this.store.state.projetos.find((projeto) => projeto.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    mixins: [notificacaoMixin],
    methods:{
        salvar() {

            if(this.id){
                this.store.commit(EDITAR_PROJETO, {id: this.id, nome: this.nomeDoProjeto})
            }else{
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
            }
            this.nomeDoProjeto = '';
            this.notificar(TipoNotificacao.SUCESSO, 'Excelente, projeto salvo', 'projeto salvo com sucesso')
            this.$router.push('/projetos')
        },

    },
    setup() {
        const store = useStore()
        return{
            store
        }
    }
})
</script>

<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" placeholder="Nome do projeto" />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>