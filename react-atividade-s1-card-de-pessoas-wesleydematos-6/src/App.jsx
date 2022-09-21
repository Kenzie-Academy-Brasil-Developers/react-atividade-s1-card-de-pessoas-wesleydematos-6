import "./App.css";
import Developer from "./components/Developer";

function App() {
  return (
    <div className="App">
      <p>💪 Atividade - Props: Card de Pessoas</p>

      <Developer name="Wesley" age={22} country="Brasil" />
      <Developer name="Tsunode" age={62} country="Japão" />
    </div>
  );
}

export default App;
