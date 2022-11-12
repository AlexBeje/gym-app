// React
import { useContext } from 'react';

// Context
import GymAppContext from '../context/GymAppContext';

function Exercise({ exercise, workoutId }) {
  const { gymAppData, setGymAppData } = useContext(GymAppContext);

  const {
    completed,
    editableReps,
    firstExercise,
    name,
    reps,
    sets,
    superSet,
    unit,
    weight,
  } = exercise;

  const toggleCompletion = () => {
    gymAppData[workoutId].exercises[exercise.id].completed =
      !gymAppData[workoutId].exercises[exercise.id].completed;

    setGymAppData(gymAppData);
  };

  return (
    <div className='flex-1 relative'>
      {superSet && !completed && (
        <div className='absolute bg-dark-500 h-full min-w-[8px] z-10' />
      )}
      <div
        onClick={toggleCompletion}
        className={`cursor-pointer flex flex-col h-full justify-center opacity-90 px-6 py-2 w-full
        ${firstExercise ? 'border-y-[1px]' : 'border-b-[1px]'}
        ${completed ? 'border-green-600' : 'border-dark-600'}
        ${
          completed ? 'bg-green-500 text-dark-900' : 'bg-dark-700 text-dark-100'
        }`}
      >
        <h2 className='font-bold mb-1 text-xl'>{name}</h2>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            <p className='flex items-center'>
              <span
                className={`font-bold mr-2 text-2xl 
              ${completed ? 'text-dark-900' : 'text-light-100'}`}
              >
                {sets}
              </span>
              sets
            </p>
            {!editableReps && <span>/</span>}
            {!editableReps && (
              <p className='flex items-center'>
                <span
                  className={`font-bold mr-2 text-2xl 
                ${completed ? 'text-dark-900' : 'text-light-100'}`}
                >
                  {reps}
                </span>
                reps
              </p>
            )}
          </div>
          <div className='flex items-center'>
            {!editableReps ? (
              <span onClick={(e) => handleUnitClick(e)}>{unit}</span>
            ) : (
              <span>reps</span>
            )}
            <input
              onFocus={(e) => e.target.select()}
              onClick={(e) => e.stopPropagation()}
              onBlur={(e) => updateexercise(e.target.value)}
              className={`flex font-bold ml-2 p-2 rounded-sm text-center w-16
                ${
                  completed
                    ? 'bg-green-600 text-dark-900'
                    : 'bg-dark-800 text-light-100'
                }
              `}
              type='number'
              defaultValue={editableReps ? reps : weight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
