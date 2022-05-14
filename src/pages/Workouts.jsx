import Workout from "../components/Workout";

function Workouts() {
  return (
    <div className="bg-light-100 h-full rounded-t-2xl text-dark-900">
      <div className="flex h-full overflow-x-auto p-6 relative snap-mandatory snap-x w-full gap-3">
        <div className="flex-none snap-center w-full">
          <Workout title="Pull Day" />
        </div>
        <div className="flex-none snap-center w-full">
          <Workout title="Push Day" />
        </div>
        <div className="flex-none snap-center w-full pr-6">
          <Workout title="Legs Day Test" />
        </div>
      </div>
    </div>
  );
}

export default Workouts;
