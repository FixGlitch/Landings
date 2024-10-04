const Loader = () => {
  return (
    <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(#EDFEFE_0deg,#D3F9FA_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(#EDFEFE_0deg,#D3F9FA_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#53E0EA_0deg,#53E0EA_180deg,transparent_180deg,transparent_360deg)]">
      <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#32D1DE_0deg,#32D1DE_180deg,transparent_180deg,transparent_360deg)]"></span>
    </div>
  );
};

export default Loader;
