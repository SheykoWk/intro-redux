import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'


function App() {
  //useSelector lo usamos para acceder a los datos de nuestro store
  const counter = useSelector(state => state.counter)
  //useDispatch lo usamos para modificar el estado global
  const counterDispatch = useDispatch()


  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <button onClick={() => counterDispatch({type: "@counter/increment"})}>Incrementar</button>
      </header>
    </div>
  );
}

export default App;
