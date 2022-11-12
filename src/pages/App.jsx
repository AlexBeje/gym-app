// Data
import gymAppDataDb from '../db/gymAppData';

// Context
import { GymAppProvider } from '../context/GymAppContext';

// Components
import Workouts from '../components/Workouts';

// Use Hooks TS
import { useLocalStorage } from 'usehooks-ts';

function App() {
  const [gymAppData, setGymAppData] = useLocalStorage(
    'gymAppData',
    gymAppDataDb
  );

  const value = { gymAppData, setGymAppData };

  return (
    <GymAppProvider value={value}>
      <div className='bg-dark-900 flex flex-col h-screen text-light-100'>
        <div className='p-3'>
          <h1 className='font-bold text-3xl text-center'>Workouts</h1>
        </div>
        <Workouts />
      </div>
    </GymAppProvider>
  );
}

export default App;
