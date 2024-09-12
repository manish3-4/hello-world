//import logo from './logo.svg';
import './App.css';
import { Greet } from './Greet';
import { Func3 } from './Func3';
import { Clcomp } from './Clcomp';

function App() {
  return (
    <div className="App">
    <Greet/>
    <Func3 name="Manish" age={21} array={[1, 2, 3, 4]}></Func3>
    <Clcomp name="Manish" age={21}></Clcomp>

    </div>
  );
}

export default App;
