// Components
import Exercise from "./Exercise";

// Icons
import { IoVideocam } from "react-icons/io5";

function Workout({ workoutTitle, video, exercisesData, resetExercise, setResetExercise }) {
  return (
    <div className="bg-dark-900 flex flex-col h-full relative rounded-xl shadow-lg shadow-light-900 text-light-100">
      <div className="absolute bg-gradient-to-t bottom-0 from-dark-800 h-full rounded-b-lg to-transparent w-full" />
      <div className="flex flex-col h-full">
        <h1 className="flex font-bold items-center justify-center min-h-[64px] text-2xl text-center z-10">
          {workoutTitle}
        </h1>
        <div className="flex flex-col h-full z-10">
          {exercisesData &&
            exercisesData.map((exercise, index) => {
              return (
                <Exercise
                  workoutTitle={workoutTitle}
                  exerciseData={exercise}
                  firstExercise={exercise.firstExercise}
                  resetExercise={resetExercise}
                  setResetExercise={setResetExercise}
                  key={index}
                />
              );
            })}
        </div>
        <div className="flex items-center justify-center min-h-[64px]">
          <a href={video} target="_blank" className="z-20">
            <IoVideocam className="text-dark-200" size="32" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Workout;
