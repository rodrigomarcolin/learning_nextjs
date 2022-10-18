import ITarefa from '../../../types/ItemTarefa';
import styles from './Item.module.scss'

interface ItemProps extends ITarefa {
  selecionaTarefa: (tarefa: ITarefa) => void
}
const Item = ({tarefa, tempo, selecionada, concluida, id, selecionaTarefa} : ItemProps) => {

  let classes : string[] = []

  if (selecionada) {
    classes.push(styles.itemSelecionado)
  }
  return (

      <li 
        key={tarefa}
        className={` ${styles.item} ${selecionada ? styles.selecionado : ''}`} 
        onClick={() => selecionaTarefa({tarefa, tempo, selecionada, concluida, id})}  
      >
        <h3>{tarefa}</h3>
        <p>{tempo}</p>
      </li>
  )
}

export default Item;