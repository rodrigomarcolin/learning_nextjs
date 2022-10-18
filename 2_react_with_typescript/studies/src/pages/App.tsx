import { useEffect, useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import ListaDeTarefas from '../components/ListaDeTarefas';
import ITarefa from '../types/ItemTarefa';
import styles from './App.module.scss'


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [tarefaSelecionada, setTarefaSelecionada] = useState<ITarefa>()

  useEffect(() => {
    console.log(tarefas)
  }, [tarefaSelecionada])
  
  function adicionaTarefa(tarefa: ITarefa) {
    setTarefas([...tarefas, tarefa])
  }

  function concluiTarefa(tarefa: ITarefa) {
    setTarefaSelecionada(undefined)
    setTarefas(tarefasAntigas => tarefasAntigas.map(ta => {
      return {
        ...ta,
        concluida: ta.id === tarefa.id ? true:ta.concluida,
        selecionada: false
      }
    }))
  }

  function atualizaTempoTarefa(tarefa: ITarefa) {
    setTarefas(tarefasAntigas => tarefasAntigas.map(ta => {
      return {
        ...ta,
        tempo: ta.id === tarefa.id ? tarefa.tempo:ta.tempo
      }
    }))
  }
  function selecionaTarefa(tarefa: ITarefa) {
    if (tarefa.concluida) {
      return 
    }
    
    setTarefas(tarefasAntigas => tarefasAntigas.map(ta => {
      return {
        ...ta, 
        selecionada: ta.id === tarefa.id
      }
    }))
    setTarefaSelecionada(tarefas.filter(el => el.id === tarefa.id)[0])
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario aoSubmeter={adicionaTarefa}/>
      <ListaDeTarefas 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        tarefa={tarefaSelecionada}
        atualizaTempoTarefa={atualizaTempoTarefa}
        concluiTarefa={concluiTarefa}
      />
    </div>
  );
}

export default App;
