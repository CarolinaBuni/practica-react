import './App.css';
import Calculator from './components/Calculator/Calculator';
import Timer from './components/Timer/Timer';
import { useTime } from './customHooks/useTime';

function App() {

  const { date } = useTime();

  return (
    <div className='App'>
      <Timer date={date} />
      <Calculator />
    </div>
  )
}

export default App
