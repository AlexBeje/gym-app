import { useState } from "react";

function Exercise({ exerciseData, firstExercise }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex-1">
      { exerciseData.superSet && !checked && <div className="bg-dark-500 min-w-[8px] z-10"/>}
      <div
        className={`flex flex-col h-full justify-center opacity-90 px-6 py-2 w-full
        ${firstExercise ? "border-y-[1px]" : "border-b-[1px]"}
        ${checked ? "border-green-600" : "border-dark-600"}
        ${
          checked ? "bg-green-500 text-dark-900" : "bg-dark-700 text-dark-100"
        }`}
        onClick={() => setChecked(!checked)}
      >
        <h2 className="font-bold mb-1 text-xl">{exerciseData.name}</h2>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <p className="flex items-center">
              <span
                className={`font-bold mr-2 text-2xl 
              ${checked ? "text-dark-900" : "text-light-100"}`}
              >
                {exerciseData.sets}
              </span>
              sets
            </p>
            {!exerciseData.editableReps && <span>/</span>}
            {!exerciseData.editableReps && (
              <p className="flex items-center">
                <span
                  className={`font-bold mr-2 text-2xl 
                ${checked ? "text-dark-900" : "text-light-100"}`}
                >
                  {exerciseData.reps}
                </span>
                reps
              </p>
            )}
          </div>
          <div className="flex items-center">
            {!exerciseData.editableReps ? <span>kg</span> : <span>reps</span>}
            <input
              type="number"
              defaultValue={
                exerciseData.editableReps
                  ? exerciseData.editableReps
                  : exerciseData.weight
              }
              onClick={(e) => e.stopPropagation()}
              className={`flex font-bold ml-2 p-2 rounded-sm text-center w-14
              ${
                checked
                  ? "bg-green-600 text-dark-900"
                  : "bg-dark-800 text-light-100"
              }
            `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
