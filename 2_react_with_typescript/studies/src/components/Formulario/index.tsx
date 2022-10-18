import React, { FC, useState } from "react";
import ITarefa from "../../types/ItemTarefa";
import Botao from "../Botao";
import styles from "./Formulario.module.scss"
import { v4 } from "uuid";
interface FormularioProps {
  aoSubmeter: (tarefa: ITarefa) => void
}

const Formulario: FC<FormularioProps> = ({aoSubmeter}) => {
  const [tarefa, setTarefa] = useState<string>('')
  const [tempo, setTempo] = useState<string>('')

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    aoSubmeter({tarefa, tempo, concluida: false, selecionada: false, id: v4()})
    setTarefa('')
    setTempo('')
  }

  return (
    <form onSubmit={submit} className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="estudo">Adicione um novo estudo</label>
        <input required value={tarefa} onChange={(e) => setTarefa(e.target.value)} type="text" name="estudo" id="estudo" placeholder="Nome do estudo"/>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input required value={tempo} onChange={(e) => setTempo(e.target.value)} type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="10:00:00" />
      </div>
      <Botao>
        Adicionar
      </Botao>
      
    </form>
  )
}

export default Formulario;