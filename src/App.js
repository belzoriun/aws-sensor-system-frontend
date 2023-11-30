import './App.css';
import { StatusDisplay } from './components/StatusDisplay/StatusDisplay';

function App() {
  return (
    <div className="App">
        <StatusDisplay active="true" status="OK"></StatusDisplay>
    </div>
  );
}

export default App;
