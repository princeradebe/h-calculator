function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen before" >
      <h1 className="text-2xl font-bold text-hubBlue mb-8">Huble Calculator</h1>
      {/*Top of calulator */}
      <div className="flex flex-col w-2/4 h-56 mb-8 bg-gray-200 rounded-lg border-2 border-hubBlue justify-center items-center">
        <input type="number" className="w-22 h-12 mb-4 bg-gray-200 border-2 border-hubBlue text-right text-2xl" />
        <div className="flex gap-2">
          <button className="w-12 h-12 bg-hubBlue hover:bg-hubDarkBlue border-2 border-hubBlue text-white">+</button>
          <button className="w-12 h-12 bg-hubBlue hover:bg-hubDarkBlue border-2 border-hubBlue text-white">-</button>
          <button className="w-12 h-12 bg-hubBlue hover:bg-hubDarkBlue border-2 border-hubBlue text-white">*</button>
          <button className="w-12 h-12 bg-hubBlue hover:bg-hubDarkBlue border-2 border-hubBlue text-red-900">/</button>
        </div>
      </div>
      {/*Bottom of calulator */}
      <div className="flex flex-col w-2/4 h-56 text-4xl font-bold text-hubBlue bg-gray-200 rounded-lg border-2 border-hubBlue justify-center items-center">
        <h2>0</h2>
        <h2>Result: 0</h2>
      </div>
    </div>
  );
}

export default App;
