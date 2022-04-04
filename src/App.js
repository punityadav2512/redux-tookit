
import './App.css';
import Home from './Home';
import { useSelector } from 'react-redux';

function App() {
  const { a } = useSelector(state => state.customReducer)

  return (

    <div className="App">
      <h2>app: {a}</h2>
      <Home />
    </div>
  );
}

export default App;
