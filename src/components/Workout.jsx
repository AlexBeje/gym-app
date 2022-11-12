// Components
import Exercise from './Exercise';

// Icons
import { IoVideocam } from 'react-icons/io5';

function Workout({ workout }) {
  const { title, exercises, videoLink } = workout;
  return (
    <div className='bg-dark-900 flex flex-col flex-none h-full rounded-xl shadow-light-900 shadow-xl snap-center text-light-100 w-full'>
      <h1 className='p-3 text-2xl text-center'>{title}</h1>
      <div className='flex flex-col h-full'>
        {exercises.map((exercise) => (
          <Exercise
            exercise={exercise}
            workoutId={workout.id}
            key={exercise.id}
          />
        ))}
      </div>
      <div className='flex justify-center p-3'>
        <a href={videoLink} target='_blank'>
          <IoVideocam className='text-dark-200' size='32' />
        </a>
      </div>
    </div>
  );
}

export default Workout;
