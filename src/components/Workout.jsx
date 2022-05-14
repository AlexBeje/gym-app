import Exercise from "./Exercise";
import { IoVideocam } from "react-icons/io5";

function Workout({ title, video, exercisesData }) {
  return (
    <div className="bg-dark-900 flex flex-col h-full relative rounded-xl shadow-lg shadow-light-900 text-light-100">
      <div className="absolute bg-gradient-to-t bottom-0 from-dark-800 h-full rounded-b-lg to-transparent w-full" />
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div className="min-w-[20px]" />
          <h1 className="flex font-bold items-center justify-center min-h-[64px] text-2xl text-center z-10">
            {title}
          </h1>
          <a
            href={video}
            className="z-20 mr-10"
          >
            <IoVideocam className="text-dark-300" size="24" />
          </a>
        </div>
        <div className="flex flex-col h-full z-10">
          {exercisesData &&
            exercisesData.map((exercise, index) => {
              return (
                <Exercise
                  exerciseData={exercise}
                  firstExercise={exercise.firstExercise}
                  key={index}
                />
              );
            })}
        </div>
        <div className="min-h-[64px]" />
      </div>
    </div>
  );
}

export default Workout;
