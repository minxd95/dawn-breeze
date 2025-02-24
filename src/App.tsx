function App() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute h-10 w-full window-draggable" />
      <div className="w-full h-full flex">
        <div className="w-[200px] border-r border-[#BABDB5] dark:border-black"></div>
        <div className="w-[200px] bg-white dark:bg-[#292929] border-r border-[#E3E3E3] dark:border-black"></div>
        <div className="flex-1 bg-white dark:bg-[#1E1E1E]"></div>
      </div>
    </div>
  );
}

export default App;
