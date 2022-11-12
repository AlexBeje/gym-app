// Data
import workoutsData from '../../db/workouts';

// Components
import Workout from '../components/Workout';

function App() {
  return (
    <div className='bg-dark-900 flex flex-col h-screen text-light-100'>
      <div className='p-3'>
        <h1 className='font-bold text-3xl text-center'>Workouts</h1>
      </div>
      <div className='bg-light-100 h-full rounded-t-2xl'>
        <div className='flex gap-3 h-full overflow-x-auto p-6 snap-mandatory snap-x'>
          {workoutsData.map((workout) => (
            <Workout workout={workout} key={workout.id} />
          ))}
          <div className='min-w-[24px]' />
        </div>
      </div>
    </div>
  );
}

export default App;
