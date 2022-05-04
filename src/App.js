import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Decrement from './components/Decrement';
import Value from './components/Value';


function App() {
  //useSelector lo usamos para acceder a los datos de nuestro store
  //const counter = useSelector(state => state.counter)
  //useDispatch lo usamos para modificar el estado global
  const counterDispatch = useDispatch()


  return (
    <div className="App">
      <header className="App-header">
        <Value/>
        <button onClick={() => counterDispatch({type: "@counter/increment"})}>Incrementar</button>
        <Decrement/>
      </header>
    </div>
  );
}

export default App;
