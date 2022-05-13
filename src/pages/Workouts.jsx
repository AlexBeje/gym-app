import Exercise from "../components/Exercise";

function Workouts() {
  return (
    <div className="bg-light-100 h-full rounded-t-2xl text-dark-900">
      <div className="flex h-full overflow-x-auto py-6 relative snap-mandatory snap-x w-full">
        <div className="flex-none snap-center w-full pl-6 pr-6">
          <Exercise name="Pull Day" />
        </div>
        <div className="flex-none snap-center w-full pl-6 pr-6">
          <Exercise name="Push Day" />
        </div>
        <div className="flex-none snap-center w-full pl-6 pr-6">
          <Exercise name="Legs Day Test" />
        </div>
      </div>
    </div>
  );
}

export default Workouts;
