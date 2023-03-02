import reactLogo from './assets/react.svg'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount} from './store/slices/counter'
import './App.css'

function App() {
  const amount = 5;
  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> count is {counter}</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) } >
         Incrementar
        </button>
        <button onClick={ () => dispatch( decrement() ) } >
         Decrementar
        </button>
        <button onClick={ () => dispatch( incrementByAmount(amount) ) } >
        Incrementar de a { amount }
        </button>
      
      </div>
    
    </div>
  )
}

export default App