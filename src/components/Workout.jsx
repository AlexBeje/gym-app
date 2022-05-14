import Exercise from "./Exercise";

function Workout({ title }) {
  return (
    <div className="bg-dark-900 flex flex-col h-full relative rounded-xl shadow-lg shadow-light-900 text-light-100">
      <div className="absolute bg-gradient-to-b from-dark-800 h-3/6 rounded-t-lg to-transparent w-full" />
      <h1 className="font-bold p-6 text-3xl text-center z-10">{title}</h1>
      <div className="z-10">
        <Exercise firstExercise />
        <Exercise />
        <Exercise />
      </div>
    </div>
  );
}

export default Workout;
