import CardColaborador from '../CardColaborador';
import './Team.css';

const Team = ({nome, colaboradores, ...props}) => {
  return colaboradores.length > 0 && (
    <section className="time" {...props} style={{backgroundColor: props.corSecundaria}}>
      <h3 style={{borderColor: props.corPrimaria}}>{nome}</h3>
      <div>
        {colaboradores?.map(c => <CardColaborador corFundo={props.corPrimaria} key={c.nome} colaborador={c}/>)}
      </div>
    </section>
  )
}

export default Team;