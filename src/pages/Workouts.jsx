import Exercise from "../components/Exercise";

function Workouts() {
  return (
    <div className="bg-light-100 h-full rounded-t-2xl text-dark-900">
      <div className="flex gap-3 h-full overflow-x-auto p-6 relative snap-mandatory snap-x w-full">
        <div className="flex-none snap-center w-full">
          <Exercise name="Pull Day" />
        </div>
        <div className="flex-none snap-center w-full">
          <Exercise name="Push Day" />
        </div>
        <div className="flex-none snap-center w-full mr-6">
          <Exercise name="Legs Day Test" />
        </div>
      </div>
    </div>
  );
}

export default Workouts;
