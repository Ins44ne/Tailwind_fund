import './App.css'
import { Part2 } from './part2'
import { Part3 } from './part3'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-5xl text-blue-800 font-extrabold">Color text</h1>
        <div className="mt-10 p-10 ">margin/padding</div>
        <div className="border-solid border-2 border-blue-500 rounded-2xl bg-sky-700/20">
          border/background
        </div>
        <div className="w-20 h-20">width/height</div>
      </header>

      <Part2 />
      <Part3 />
    </div>
  )
}

export default App
