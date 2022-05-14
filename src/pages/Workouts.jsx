import Workout from "../components/Workout";
import workoutsData from "../../db/workouts";

function Workouts() {
  return (
    <div className="bg-light-100 h-full rounded-t-2xl text-dark-900">
      <div className="flex h-full overflow-x-auto p-6 relative snap-mandatory snap-x w-full gap-3">
        {workoutsData &&
          workoutsData.map((workout, index) => {
            return (
              <div
                className={`flex-none snap-center w-full ${
                  workout.lastWorkout && "pr-6"
                }`}
                key={index}
              >
                <Workout
                  title={workout.title}
                  exercisesData={workout.exerecises}
                  lastWorkout={workout.lastWorkout}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Workouts;
