import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div>
      <Counter initialState={0} number={1} />
      <Counter initialState={2} number={2} />
      <Counter initialState={3} number={3} />
    </div>
  );
}

export default App;
