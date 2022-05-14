import Exercise from "./Exercise";

function Workout({ title, exercisesData }) {
  return (
    <div className="bg-dark-900 flex flex-col h-full relative rounded-xl shadow-lg shadow-light-900 text-light-100">
      <div className="absolute bg-gradient-to-b from-dark-800 h-3/6 rounded-t-lg to-transparent w-full" />
      <h1 className="font-bold p-4 text-2xl text-center z-10">{title}</h1>
      <div className="z-10">
        {exercisesData && exercisesData.map((exercise, index) => {
          return (
            <Exercise exerciseData={exercise} firstExercise={exercise.firstExercise} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Workout;
