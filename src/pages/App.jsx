// React
import { useState } from "react";

// Data
import workoutsData from "../../db/workouts";

// Components
import Workout from "../components/Workout";

// Icons
import { AiOutlineReload } from "react-icons/ai";

function App() {
  const [resetExercise, setResetExercise] = useState(false);

  const handleResetClick = () => {
    setResetExercise(true);
  };

  return (
    <div className="bg-dark-900 flex flex-col h-screen text-light-100">
      <div className="flex">
        <div className="flex-1 min-w-[20px] ml-8" />
        <h1 className="font-bold p-3 text-3xl text-center w-full">Workouts</h1>
        <div className="flex flex-1 items-center justify-end">
          <AiOutlineReload
            className="cursor-pointer mr-8 text-dark-200 text-xl"
            onClick={handleResetClick}
          />
        </div>
      </div>
      <div className="bg-light-100 h-full rounded-t-2xl text-dark-900">
        <div className="flex h-full overflow-x-auto p-6 snap-mandatory snap-x gap-3">
          {workoutsData &&
            workoutsData.map((workout, index) => {
              return (
                <div className="flex-none snap-center w-full" key={index}>
                  <Workout
                    workoutTitle={workout.title}
                    exercisesData={workout.exerecises}
                    video={workout.video}
                    resetExercise={resetExercise}
                    setResetExercise={setResetExercise}
                  />
                </div>
              );
            })}
          <div className="min-w-[24px]" />
        </div>
      </div>
    </div>
  );
}

export default App;
