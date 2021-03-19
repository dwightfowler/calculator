import logo from './logo.svg';
import './App.css';

const doClick = (event, value) => {
  console.log(`Event: ${event}
  Value: ${value}`);
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
      <label htmlFor="UserName">
        User Name:
        <input id="UserName" type="text" onClick={(event) => doClick(event, event.target.value)} />
      </label>
      </div>
    </div>
  );
}

export default App;
