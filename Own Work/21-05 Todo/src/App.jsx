import './app.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import AddTodoBtn from './components/AddTodoBtn';

function App() {



  return (
    <div className='bg-gray-900 text-white h-screen'>
        <NavBar/>
        <div className='w-full h-auto text-black flex flex-wrap flex-col justify-center items-center rounded-xl '>
          <div className=' bg-white rounded-xl h-auto w-4/5 sm:w-3/5 lg:w-2/5' id='hight'>
            <Header title = "Todo"/>
            <TodoItems completed={true}/>
            <TodoItems/>
            <TodoItems/>
          </div>
          <AddTodoBtn/>
        </div>
    </div>
  )
}


export default App;
