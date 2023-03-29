import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.google.com/spreadsheets/d/1cQHILHtYoDp0rEuHGGARHn77m14XrNBAxvRAPZrm5VY/edit#gid=1452839380"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to view the dashbaord
        </a>
      </header>
    </div>
  );
}

export default App;
