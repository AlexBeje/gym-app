function Workout({ name }) {
  return (
    <div className="bg-dark-900 flex flex-col h-full justify-between rounded-xl shadow-lg shadow-light-900 text-light-100">
      <div className="bg-gradient-to-b flex from-dark-800 h-3/6 rounded-t-lg to-transparent w-full" />
      <h1 className="font-bold p-6 text-3xl">{name}</h1>
    </div>
  );
}

export default Workout;
