function Exercise({ name }) {
  return (
    <div className="bg-dark-900 flex h-full items-end rounded-xl shadow-sm text-light-100">
      <h1 className="font-bold p-6 text-3xl">{name}</h1>
    </div>
  );
}

export default Exercise;
