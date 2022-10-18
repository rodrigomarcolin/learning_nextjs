import React, { FC } from 'react'
import Item from './Item'
import styles from './ListaDeTarefas.module.scss'
import ITarefa from '../../types/ItemTarefa'

interface ListaDeTarefasProps {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefa: ITarefa) => void
}

const ListaDeTarefas: FC<ListaDeTarefasProps> = ({tarefas, selecionaTarefa}) => {
  return (
    <aside className={styles.listaTarefas}>
        <h2>Lista de Tarefas</h2>
        {tarefas?.map(item => 
          <Item 
            key={item.tarefa} 
            {...item}
            selecionaTarefa={selecionaTarefa}         
          />
        )}
    </aside>
  )
}

export default ListaDeTarefas;