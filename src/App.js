

import './App.css';

import TodoInput from './components/TodoInput';


function App() {
 

  return (
    <div className=' min-h-screen bg-[#172842]'>
    <div className='flex items-center justify-center text-blue-700 font-bold text-2xl'>
      <h1 className=''>Todo App</h1>
      </div>
      <TodoInput  />
      </div>

  );
}

export default App;
