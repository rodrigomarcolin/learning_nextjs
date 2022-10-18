import { segundosParaTempo } from '../../../common/utils/time'
import styles from './Relogio.module.scss'

export default function Relogio ({tempo = 0} : {tempo: number | undefined}) {
  let strTempo = segundosParaTempo(tempo)
  return (
    <>
      <span className={styles.relogioNumero}>{strTempo[0]}</span>
      <span className={styles.relogioNumero}>{strTempo[1]}</span>
      <span className={styles.relogioDivisao}>{strTempo[2]}</span>
      <span className={styles.relogioNumero}>{strTempo[3]}</span>
      <span className={styles.relogioNumero}>{strTempo[4]}</span>
      <span className={styles.relogioDivisao}>{strTempo[5]}</span>
      <span className={styles.relogioNumero}>{strTempo[6]}</span>
      <span className={styles.relogioNumero}>{strTempo[7]}</span>
    </>
  )
}