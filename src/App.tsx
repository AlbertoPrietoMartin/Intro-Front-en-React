import './App.css';
import Saludo from './components/hello';
import Counter from './components/count';
import Calculadora from './components/calculadora';

const FuncioncitaDeMiCorazon = () =>{

    const name = "JhonD";

  return (
    <div className="mainContainer">
      <h1> Esto esta funcionando moreno.</h1>
      <div>
        <Saludo name ={name}/>
      </div>
      <div>
        <Counter name= {name}/>
      </div>
      <div>
        <Calculadora name = {name}/>
      </div>
    </div>
    
  )
};

export default FuncioncitaDeMiCorazon;