import "./App.css";

// import Todo from './Components/DAY2/Todo';
import { Navbar } from "./components/Nabar/Navbar";
import StaticCard from "./components/StaticCard/StaticCard";
import {Counter} from "./components/Day2/Counter"
import {PaymentCard} from "./components/Day3/PaymentCard";
import {Todo} from "./components/Day5UseEffect1/Todo";
import {Timer} from "./components/useEffect-2_Timer/Timer";
import {ReactForm} from "./components/Day2/Forms_Event_useRef/ReactForm";
function App() {
  return (
    <div className='App'>
      <hr/>
      <h1>Day1 assignment</h1>
      <Navbar />
      <StaticCard />
      <hr />
      <h1>Day2 assignment</h1>
      <div className='todocont'>{/* <Todo/> */}</div>

      <Counter />
      <hr />
      <h1>Day3 Assignment</h1>
      <PaymentCard />
      <h1>DAY5 UseEffect-1 assignment</h1>
      <Todo/>
      <Timer />
      <ReactForm />
    </div>
  );
}

export default App;
