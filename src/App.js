import './index.css';
import Key from './components/Key';

function App() {
  return (
    <div className="App">
      {/* <h3>KEYS</h3> */}
      <Key backgroundColor="blue" animation ="rotate 2s linear infinite alternate both"/>
      <Key backgroundColor="green" animation ="rotate 3s linear 1s infinite alternate both"/>
      <Key backgroundColor="pink" animation ="rotate 2s linear 7s infinite alternate both"/>
      <Key backgroundColor="yellow" animation ="rotate 2s linear 4.5s infinite alternate both"/>
      <Key backgroundColor="orange" animation ="rotate 2s linear 5.5s infinite alternate both"/>
    </div>
  );
}

export default App;
