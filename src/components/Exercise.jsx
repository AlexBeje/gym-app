import { useState } from "react";

function Exercise({ firstExercise }) {
  const [checked, setChecked] = useState(false);

  const data = {
    name: "Deadlift",
    sets: "4",
    reps: "6",
    weight: "100",
  };

  return (
    <div
      className={`px-6 py-3 
        ${firstExercise ? "border-y-[1px]" : "border-b-[1px]"}
        ${checked ? "border-green-600" : "border-dark-600"}
        ${checked ? "bg-green-500 text-dark-900" : "bg-dark-700"}`}
      onClick={() => setChecked(!checked)}
    >
      <h2 className="font-bold mb-2 text-2xl">{data.name}</h2>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <p className="flex items-center">
            <span className="font-bold mr-2 text-2xl">{data.sets}</span> sets
          </p>
          of
          <p className="flex items-center">
            <span className="font-bold mr-2 text-2xl">{data.reps}</span> reps
          </p>{" "}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            defaultValue={data.weight}
            onClick={(e) => e.stopPropagation()}
            className={`flex mr-2 p-2 rounded-sm text-center w-11
              ${checked ? "bg-green-600 text-dark-900" : "bg-dark-800"}
            `}
          />
          kg
        </div>
      </div>
    </div>
  );
}

export default Exercise;
