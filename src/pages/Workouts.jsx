import Workout from "../components/Workout";

import { isMobile } from "react-device-detect";

function Workouts() {
  return (
    <div className="bg-light-100 h-full rounded-t-2xl text-dark-900">
      <div className="flex h-full overflow-x-auto p-6 relative snap-mandatory snap-x w-full gap-3">
        <div className="flex-none snap-center w-full">
          <Workout name="Pull Day" />
        </div>
        <div className="flex-none snap-center w-full">
          <Workout name="Push Day" />
        </div>
        <div className={`flex-none snap-center w-full ${isMobile && "pr-6"}`}>
          <Workout name="Legs Day Test" />
        </div>
      </div>
    </div>
  );
}

export default Workouts;
