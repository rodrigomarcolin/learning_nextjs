import ITarefa from '../../../types/ItemTarefa';
import styles from './Item.module.scss'

interface ItemProps extends ITarefa {
  selecionaTarefa: (tarefa: ITarefa) => void
}
const Item = ({tarefa, tempo, selecionada, concluida, id, selecionaTarefa} : ItemProps) => {

  return (

      <li 
        key={tarefa}
        className={` ${styles.item} ${selecionada ? styles.selecionado : ''} ${concluida ? styles.itemCompletado : ''}`} 
        onClick={() => selecionaTarefa({tarefa, tempo, selecionada, concluida, id})}  
      >
        <h3>{tarefa}</h3>
        <p>{tempo}</p>
        <div className={`${concluida ? styles.concluido : ''}`}></div>
      </li>
  )
}

export default Item;