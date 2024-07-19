
import Card from "./Card";
import { useState } from "react";
function Cards({courses,category, setCategory}){

    const [liked,setLiked] = useState([]);

   function getcources(){
        if(category === "All"){
            let allcources = [];
      
        Object.values(courses).forEach((array)=>{
            array.forEach((entry)=>{
                allcources.push(entry);
            })
        })
        // console.log(allcources);
        return allcources;
        }
        else{
            return courses[category];
        }
   }
    
    return(
        <div className="flex flex-wrap justify-center">{
                getcources().map((course)=>{
                    return <Card course={course} liked={liked} setLiked={setLiked}></Card>;
                })
            }
        </div>
    )

}

export default Cards;