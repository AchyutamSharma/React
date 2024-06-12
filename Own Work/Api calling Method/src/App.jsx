import { useState,useEffect } from 'react';
import { getPosts,getRandomUser } from './Api/Api';
import PostCard from "./components/PostCards";
import NavBar from "./components/Nav";
import UserCards from "./components/UserCard"
function App() {

    const [data,setData] = useState(null);
    const [userData,setUserData] = useState(null);

    useEffect(()=>{
      getPosts().then((posts) => setData(posts));
    },[])
    
    useEffect(()=>{
      getRandomUser().then((user) => setUserData(user.results[0]));
    },[])
    const refresh= () =>{
      getRandomUser().then((user) => setUserData(user.results[0]));
    };

  return (
    <div className='bg-neutral-900 text-white'>
      < NavBar/>
      <h1 className='mt-2 text-4xl text-center lxs:text-lg font-bold'>Random User</h1>
       <div className='min-h-fit flex flex-col justify-center items-center w-full'>
        {userData && <UserCards data={userData}/>}
        <button className="h-10 w-32 bg-slate-800 rounded-2xl font-semibold" onClick={refresh}>Refresh</button>
        </div> 
      <div className='flex flex-nowrap justify-center'>
        {/* <div className='border text-center rounded-xl w-36 xxs:hidden xs:hidden sm:hidden lxs:hidden'><h1>Advertisement Box</h1></div> */}
        <div className='flex flex-wrap gap-3 justify-center w-4/5 md:4/5 xl:w-4/5'>
        {
          data ? data.map((e) => <PostCard title={e.title} body={e.body} id={e.id}/>) : <p>No Data</p>
        }
        </div>
        
        {/* <div className='border text-center rounded-xl w-36 xxs:hidden xs:hidden lxs:hidden '><h1>Advertisement Box</h1></div> */}
    </div>
    </div>
  )
}

export default App
