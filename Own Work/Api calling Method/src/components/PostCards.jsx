import React from "react";

const PostCard = (postData) =>{
    return(
        <div className="bg-sky-500 text-black mt-2 p-4 xxs:p-2  rounded-lg w-96 xxs:w-72 xs:w-72">
            <h2 className="lxs:text-sm xxs:text-sm xs:text-xl text-lg font-bold ">{postData.id}.</h2>
            <h3 className="lxs:text-sm xxs:text-sm  text-lg mb-2 font-bold">{postData.title}.</h3>
            <p className="lxs:text-sm xxs:text-xs font-medium">{postData.body}.</p>
        </div>
    );
}


export default PostCard;
