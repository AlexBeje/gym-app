import workoutsData from "../../db/workouts";
import Workout from "../components/Workout";

function App() {
  return (
    <div className="bg-dark-900 flex flex-col h-screen text-light-100">
      <h1 className="font-bold text-3xl text-center w-full p-3">Workouts</h1>
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
    </div>
  );
}

export default App;
