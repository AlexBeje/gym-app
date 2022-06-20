// React
import { useState } from "react";

// Use Hooks TS
import { useLocalStorage } from "usehooks-ts";

// Data
import workoutsData from "../../db/workouts";

// Components
import Workout from "../components/Workout";

// Icons
import { IoCalendar } from "react-icons/io5";
import { IoBarbell } from "react-icons/io5";

// Constants
const WEEK_COUNTER_DEFAULT = 1000;

function App() {
  const [resetExercise, setResetExercise] = useState(false);
  const [weekCounter, setWeekCounter] = useLocalStorage(
    "weekCounter",
    WEEK_COUNTER_DEFAULT
  );

  const handleResetClick = () => {
    setWeekCounter(weekCounter + 1);
    setResetExercise(true);
  };

  const handleWeekClick = () => {
    if (weekCounter > 1) {
      setWeekCounter(weekCounter - 1);
    }
  };

  return (
    <div className="bg-dark-900 flex flex-col h-screen text-light-100">
      <div className="flex items-center justify-between p-3">
        <div
          onClick={handleWeekClick}
          className="flex font-bold items-center justify-start ml-4 text-dark-200 text-lg w-[80px]"
        >
          <span>{weekCounter}</span>
          <IoCalendar className="ml-1" />
        </div>
        <h1 className="font-bold text-3xl text-center">
          Workouts
        </h1>
        <div className="flex items-center justify-end mr-4 w-[80px]">
          <IoBarbell
            className="cursor-pointer text-3xl text-dark-200"
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
