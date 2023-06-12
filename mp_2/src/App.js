// import logo from './logo.svg';
import './App.css';
import About from '../material_ui_app/components/About';
import Form from '../material_ui_app/components/mini_project_2/Form';
import Reservation from '../material_ui_app/components/mini_project_2/Reservation';

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
      <Reservation/>
      <Form/>
    </div>
  );
}


export default App;
