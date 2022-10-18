import "./Input.css";

const Input = ({ label, ...props }) => {

  return (
    <div className="campo">
      <label htmlFor="input">{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
