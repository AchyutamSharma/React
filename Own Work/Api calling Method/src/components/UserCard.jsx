import React from "react";

const UserCards = (users)=>{
    console.log(users.data);
    
    // length {users.data.results.name.first}  xs:h-32  xxs:h-28 lxs:h-20 lxs:mx-1
return (
    <section className="w-96     bg-gray-900 py-3 my-2 border rounded-xl flex flex-col items-center">
        
        <img className=" rounded-3xl m-2 p-2 lxs:h-48 h-56 max-w-fit" src={users.data.picture.large} alt="User Picture" />
        <div className="py-2 px-4 text-wrap">
        <h3 className="font-bold" >{users.data.name.title} {users.data.name.first} {users.data.name.last}</h3>
        <h4 className="lxs:text-sm font-medium">{users.data.gender.toUpperCase()}</h4>
        <h4 className="lxs:text-sm font-medium">Age:- {users.data.dob.age}</h4>
        <h4 className="lxs:text-sm font-medium">{users.data.email}</h4>
        <p className="lxs:text-sm font-medium">+91 {users.data.phone}</p>
        <p className="lxs:text-sm">Address :- {users.data.location.street.name}, {users.data.location.city}, {users.data.location.state}, {users.data.location.country}</p>
        </div>

    </section>
);
}

export default UserCards;