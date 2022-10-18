import "./Formulario.css";

const Formulario = ({ children, ...props }) => {
  return (
    <section className="formulario">
      <form {...props}>
        <h2>Preencha os dados para criar o Card do colaborador</h2>
        {children}
      </form>
    </section>
  );
};

export default Formulario;
