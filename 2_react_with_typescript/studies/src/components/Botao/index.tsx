import React, { ReactNode } from "react";
import styles from './Botao.module.scss'

interface Props {
  children: ReactNode, 
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void ,
  disabled?: boolean 
}

class Botao extends React.Component<Props> {

  render () {
    return (
      <button disabled={this.props.disabled} onClick={this.props.onClick} className={styles.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;