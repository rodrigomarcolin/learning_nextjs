import "./CardColaborador.css"

const CardColaborador = ({colaborador, ...props}) => {
  return (
    <article className="cardColaborador">
      <div className="image" style={{backgroundColor: props.corFundo}}>
        <img src={colaborador.img} alt={"Foto do colaborador " + colaborador.nome} />
      </div>
      <div className="text">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </article>
  )
}

export default CardColaborador;