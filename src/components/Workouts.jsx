// React
import { useContext } from 'react';

// Components
import Workout from '../components/Workout';

// Context
import GymAppContext from '../context/GymAppContext';

export default function Workouts() {
  const { gymAppData } = useContext(GymAppContext);

  return (
    <div className='bg-light-100 h-full rounded-t-2xl'>
      <div className='flex gap-3 h-full overflow-x-auto p-6 snap-mandatory snap-x'>
        {gymAppData.map((workout) => (
          <Workout workout={workout} key={workout.id} />
        ))}
        <div className='min-w-[24px]' />
      </div>
    </div>
  );
}
