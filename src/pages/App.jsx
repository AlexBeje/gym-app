import Header from "../components/Header";
import Workouts from "./Workouts";

function App() {
  return (
    <div className="bg-light-100 flex flex-col h-screen">
      <Header />
      <div className="bg-dark-900 h-full p-6 rounded-t-2xl text-light-100">
        <Workouts />
      </div>
    </div>
  );
}

export default App;
