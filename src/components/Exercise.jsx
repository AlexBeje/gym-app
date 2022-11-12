// React
import { useEffect } from 'react';

// Use Hooks TS
import { useLocalStorage } from 'usehooks-ts';

function Exercise({ exercise, workoutTitle }) {
  const [exerciseReps, setExerciseReps] = useLocalStorage(
    workoutTitle + '.' + exercise.name + '.reps.' + exercise.reps,
    exercise.editableReps
  );

  const [exerciseWeight, setExerciseWeight] = useLocalStorage(
    workoutTitle + '.' + exercise.name + '.weight.' + exercise.weight,
    exercise.weight
  );

  const [exerciseUnit, setExerciseUnit] = useLocalStorage(
    workoutTitle + '.' + exercise.name + '.unit.' + exercise.unit,
    exercise.unit
  );

  const [exerciseCompleted, setExerciseCompleted] = useLocalStorage(
    workoutTitle +
      '.' +
      exercise.name +
      '.completed.' +
      exercise.completed,
    exercise.completed
  );

  const updateexercise = (exerciseInputData) => {
    if (exercise.editableReps) {
      if (exerciseInputData !== exerciseReps) {
        setExerciseReps(exerciseInputData);
      }
    } else {
      if (exerciseInputData !== exerciseWeight) {
        setExerciseWeight(exerciseInputData);
      }
    }
  };

  const handleUnitClick = (e) => {
    e.stopPropagation();
    const unit = e.target.innerHTML;
    if (unit === 'kg') {
      setExerciseUnit('lbs');
    } else {
      setExerciseUnit('kg');
    }
  };

  return (
    <div className='flex-1 relative'>
      {exercise.superSet && !exerciseCompleted && (
        <div className='absolute bg-dark-500 h-full min-w-[8px] z-10' />
      )}
      <div
        onClick={() => setExerciseCompleted(!exerciseCompleted)}
        className={`cursor-pointer flex flex-col h-full justify-center opacity-90 px-6 py-2 w-full
        ${exercise.firstExercise ? 'border-y-[1px]' : 'border-b-[1px]'}
        ${exerciseCompleted ? 'border-green-600' : 'border-dark-600'}
        ${
          exerciseCompleted
            ? 'bg-green-500 text-dark-900'
            : 'bg-dark-700 text-dark-100'
        }`}
      >
        <h2 className='font-bold mb-1 text-xl'>{exercise.name}</h2>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            <p className='flex items-center'>
              <span
                className={`font-bold mr-2 text-2xl 
              ${exerciseCompleted ? 'text-dark-900' : 'text-light-100'}`}
              >
                {exercise.sets}
              </span>
              sets
            </p>
            {!exercise.editableReps && <span>/</span>}
            {!exercise.editableReps && (
              <p className='flex items-center'>
                <span
                  className={`font-bold mr-2 text-2xl 
                ${exerciseCompleted ? 'text-dark-900' : 'text-light-100'}`}
                >
                  {exercise.reps}
                </span>
                reps
              </p>
            )}
          </div>
          <div className='flex items-center'>
            {!exercise.editableReps ? (
              <span onClick={(e) => handleUnitClick(e)}>{exerciseUnit}</span>
            ) : (
              <span>reps</span>
            )}
            <input
              onFocus={(e) => e.target.select()}
              onClick={(e) => e.stopPropagation()}
              onBlur={(e) => updateexercise(e.target.value)}
              className={`flex font-bold ml-2 p-2 rounded-sm text-center w-16
                ${
                  exerciseCompleted
                    ? 'bg-green-600 text-dark-900'
                    : 'bg-dark-800 text-light-100'
                }
              `}
              type='number'
              defaultValue={
                exercise.editableReps ? exerciseReps : exerciseWeight
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
