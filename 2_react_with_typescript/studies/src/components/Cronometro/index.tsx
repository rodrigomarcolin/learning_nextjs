import ITarefa from '../../types/ItemTarefa';
import Botao from '../Botao';
import styles from './Cronometro.module.scss'
import Relogio from './Relogio';
import { segundosParaTempo, tempoParaSegundos } from '../../common/utils/time';
import React, { useEffect, useState } from 'react';

interface CronometroProps {
  tarefa: ITarefa | undefined,
  atualizaTempoTarefa: (tarefa: ITarefa) => void,
  concluiTarefa: (tarefa: ITarefa) => void
}

const Cronometro = ({tarefa, atualizaTempoTarefa, concluiTarefa} : CronometroProps) => {
  let [tempo, setTempo] = useState<number>(0)
  let [running, setRunning] = useState<boolean>(false)
  let [intervalId, setIntervalId] = useState<NodeJS.Timer>()

  useEffect(() => {
    if (tarefa?.tempo) {
      setTempo(tempoParaSegundos(tarefa.tempo))
    }

  }, [tarefa])

  function botaoClicado(e : React.MouseEvent<HTMLButtonElement>) {
    setRunning(!running)
  }

  function paraCronometro() {
    setRunning(false)
    if (intervalId) {
      clearInterval(intervalId)
      if (tarefa) {
        atualizaTempoTarefa({
          ...tarefa,
          tempo: segundosParaTempo(tempo)
        })
      }
      setIntervalId(undefined)
    }
  }

  // Quando o botão é clicado, verifica se pausa ou despausa
  useEffect(() => {
    if (running && !intervalId) {
      regressiva()
    }

    if (!running) {
        paraCronometro()
    }

  }, [running, intervalId])
  
  function conclui() {
    paraCronometro()
    if (tarefa)
      concluiTarefa(tarefa)

  }
  // Quando o tempo muda, verifica se termina
  useEffect(()=> {
    console.log('tempo', tempo)
    if (tempo < 1) {
      conclui()
    }
  }, [tempo])
  
  function regressiva() {
    const id = setInterval(() =>{ 
      setTempo((oldTempo) => oldTempo > 0 ? oldTempo - 1 : 0)
    }, 1000)
    setIntervalId(id)

  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio 
          tempo={tempo}
        />
      </div>
      <Botao disabled={tempo === 0} onClick={botaoClicado}>
        {running ? 'Pausar':'Começar'}
      </Botao>
    </div>
  )
}

export default Cronometro;