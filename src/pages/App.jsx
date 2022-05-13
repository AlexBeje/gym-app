import Header from "../components/Header";
import Workouts from "./Workouts";

function App() {
  return (
    <div className="bg-dark-900 flex flex-col h-screen text-light-100">
      <Header title="Workouts"/>
      <Workouts />
    </div>
  );
}

export default App;
