// import logo from './logo.svg';
import "./App.css";
import About from "./mini_project_2/About";
import Form from "./mini_project_2/Form";
import Reservation from "./mini_project_2/Reservation";
import TableApp from "./components/TableApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <About />
      <TableApp />
      <Reservation />
      <Form />
    </div>
  );
}

export default App;
