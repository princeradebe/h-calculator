function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen before" >
      <h1 className="text-2xl font-bold text-hubBlue mb-8">Huble Calculator</h1>
      {/*Top of calulator */}
      <div className="flex flex-col w-2/4 h-56 mb-8 bg-gray-200 rounded-lg border-2 border-hubBlue justify-center items-center">
        <input type="text" className="w-22 h-12 mb-4 bg-gray-200 border-2 border-hubBlue" />
        <div className="flex gap-2">
          <button className="w-12 h-12 text-red-600 bg-hubBlue border-2 border-hubBlue">+</button>
          <button className="w-12 h-12 text-white bg-hubBlue border-2 border-hubBlue">-</button>
          <button className="w-12 h-12 text-white bg-hubBlue border-2 border-hubBlue">*</button>
          <button className="w-12 h-12 text-white bg-hubBlue border-2 border-hubBlue">/</button>

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
