

export const getPosts = async() =>{
   const respond = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'GET',
    });
    return respond.json();

};

export const getRandomUser = async()=>{
    const respond = await fetch('https://randomuser.me/api/',{
        method : 'GET',
    });
    return respond.json();
};