import Workout from "../components/Workout";
import workoutsData from "../../db/workouts";

function Workouts() {
  return (
    <div className="bg-light-100 h-full rounded-t-2xl text-dark-900">
      <div className="flex h-full overflow-x-auto p-6 snap-mandatory snap-x gap-3">
        {workoutsData &&
          workoutsData.map((workout, index) => {
            return (
              <div className="flex-none snap-center w-full" key={index}>
                <Workout
                  title={workout.title}
                  exercisesData={workout.exerecises}
                  video={workout.video}
                />
              </div>
            );
          })}
        <div className="min-w-[24px]" />
      </div>
    </div>
  );
}

export default Workouts;
