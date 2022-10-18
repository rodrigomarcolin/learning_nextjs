import Banner from "./components/Banner";
import Botao from "./components/Botao";
import ComboBox from "./components/ComboBox";
import Formulario from "./components/Formulario";
import Input from "./components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  document.title = "Organograma"
  
  const [colaboradores, setColaboradores] = useState([])

  const Times = [
    { value: "frontend", name: "Front-End", corPrimaria: 'blue', corSecundaria: 'lightblue' },
    { value: "backend", name: "Back-End", corPrimaria: 'green', corSecundaria: 'lightgreen'},
    { value: "datascience", name: "Data Science", corPrimaria: 'red', corSecundaria: '#FFCCBC' },
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [img, setImg] = useState("");
  const [time, setTime] = useState("");
  
  const aoSalvar = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  };

  const submit = (e) =>{
    e.preventDefault()
    aoSalvar({nome, cargo, img, time})
    setCargo('')
    setNome('')
    setImg('')
  }


  return (
    <div className="App">
      <Banner className="banner" />
      <Formulario onSubmit={(e) => submit(e)}>
        <Input 
          required={true} 
          label="Nome" 
          placeholder="Insira o nome..." 
          value={nome}
          onChange={(e) => {setNome(e.target.value)}}
        />
        <Input 
          required={true} 
          label="Cargo" 
          placeholder="Insira o cargo..." 
          value={cargo}
          onChange={(e) => {setCargo(e.target.value)}}

        />
        <Input
          required={true}
          label="Imagem"
          placeholder="Insira a imagem..."
          value={img}
          onChange={(e) => {setImg(e.target.value)}}
        />
        <ComboBox
          required={true}
          label="Time"
          items={Times}
          value={time}
          onChange={(e) => {setTime(e.target.value)}}
        />
        
        <Botao>
          <FontAwesomeIcon icon={faPlus} />
          Criar Card
        </Botao>

      </Formulario>

      {
        Times?.map(time => {
            return <Team 
                      key={time.name}
                      nome={time.name} 
                      colaboradores={colaboradores.filter(c => c.time === time.value) }
                      corPrimaria={time.corPrimaria}
                      corSecundaria={time.corSecundaria}
                    />})
      }
      
      <Footer />
    </div>
  );
}

export default App;
