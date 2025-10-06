
const Counter = () => {
  return (
    <div className="max-w-7xl mx-auto py-20  relative overflow-x-hidden md:overflow-visible">
          <div className="absolute  -bottom-40 left-10 w-[750px] h-[750px] bg-purple-500/10 rounded-full blur-3xl "></div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Current Clients */}
        <div className="text-center bg-[#25153694] py-4 rounded-2xl">
          <div className="text-5xl md:text-6xl font-bold text-white mb-2">
            150<span className="text-amber-400">+</span>
          </div>
          <div className="text-gray-300 text-lg">Current Clients</div>
        </div>

        {/* Completed Projects */}
        <div className="text-center bg-[#25153694] py-4 rounded-2xl">
          <div className="text-5xl md:text-6xl font-bold text-white mb-2">
            25k<span className="text-amber-400">+</span>
          </div>
          <div className="text-gray-300 text-lg">Completed Projects</div>
        </div>

        {/* Metro Solver Teams */}
        <div className="text-center bg-[#25153694] py-4 rounded-2xl">
          <div className="text-5xl md:text-6xl font-bold text-white mb-2">
            90<span className="text-amber-400">+</span>
          </div>
          <div className="text-gray-300 text-lg">Metro Solver Teams</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
