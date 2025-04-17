import type { TipoNotificacao } from "@/interfaces/INotificacao"
import { NOTIFICAR } from "@/store/mutacoes"
import {store} from '@/store'

export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacao, titulo: string, texto: string): void {
            store.commit(NOTIFICAR, {
                tipo,
                titulo,
                texto
            })
        }
    }
}