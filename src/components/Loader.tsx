function Loader() {
  return (
    <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <p className="text-3xl mr-4">Loading...</p>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
