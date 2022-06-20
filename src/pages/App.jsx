// React
import { useState } from "react";

// Use Hooks TS
import { useLocalStorage } from "usehooks-ts";

// Data
import workoutsData from "../../db/workouts";

// Components
import Workout from "../components/Workout";

// Icons
import { IoBarbell } from "react-icons/io5";

// Constants
const WEEK_COUNTER_DEFAULT = 1;

function App() {
  const [resetExercise, setResetExercise] = useState(false);
  const [weekCounter, setWeekCounter] = useLocalStorage("weekCounter", WEEK_COUNTER_DEFAULT);

  const handleResetClick = () => {
    setWeekCounter(weekCounter + 1);
    setResetExercise(true);
  };

  const handleWeekClick = () => {
    if(weekCounter > 1) {
      setWeekCounter(weekCounter - 1);
    }
  };

  return (
    <div className="bg-dark-900 flex flex-col h-screen text-light-100">
      <div className="flex">
        <div className="flex flex-1 font-bold items-center justify-center min-w-[30px] ml-8 text-dark-200 text-xl">
          <span onClick={handleWeekClick}>{weekCounter}</span>
        </div>
        <h1 className="font-bold p-3 text-3xl text-center w-full">Workouts</h1>
        <div className="flex flex-1 items-center justify-end">
          <IoBarbell
            className="cursor-pointer mr-8 text-3xl text-dark-200"
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
