// import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";


function Card({course, liked, setLiked}){
    console.log(liked);
    // const [islike,setislike] = useState(false);
    function changelike(){
        if(!liked.includes(course.id)) {
            if(liked.length === 0) setLiked([course.id]);
            else setLiked((prev) => [...prev, course.id]);
            toast.success("Liked successfully!");
        }
        else {
            setLiked(liked.filter( item => item!== course.id));
            toast.warning("Like removed successfully!");
        }
    }

    return(
        <div className="w-[300px] m-4 bg-slate-800 text-white p-4 rounded-lg relative">
            <img src={course.image.url} width={300}></img>
            <div className="absolute right-5 top-[150px] w-8 h-8 bg-white z-10 rounded-full" onClick={changelike}>
            {liked.includes(course.id) ? (<FcLike className="absolute right-2 top-2 scale-150 "></FcLike>) : (<FcLikePlaceholder className="absolute right-2 top-2 scale-150 " ></FcLikePlaceholder>)}
            </div>
            <p className="font-bold py-3">{course.title}</p>
            <p>{course.description.slice(0,200)}...<span>show more...</span></p>
        </div>
    )
}

export default Card;