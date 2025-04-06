import TaskForm from "./components/TaskForm"
import Tasklist from "./components/Tasklist"

function App() {

  return (
    <div>
      <header className="text-4xl text-gray-800 font-bold bg-amber-200 p-5 text-center">
        Task Manager
      </header>
      <main>
        <TaskForm/>
        <Tasklist/>
      </main>
    </div>
  )
}

export default App
