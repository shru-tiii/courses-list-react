import { useEffect, useState } from "react";
import "./App.css";
import { filterData , apiUrl} from "./data";
import Navi from "./components/Navi";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState("All");


  useEffect(()=>{
    async function getapidata(){
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const dataa = await res.json();
        console.log(dataa);
        setCourses(dataa.data);
        console.log(courses);
      }
      catch{
        toast.error("something went wrong!");
        console.log("hello");
      }
      setLoading(false);
    }
    getapidata();
  },[]);
  
  return (
    <div className="flex flex-col  bg-slate-700 min-h-screen">
      <h1 className="text-center bg-slate-900 text-white font-bold text-3xl p-1">Top Courses</h1>
      <Navi filterData={filterData} category={category} setCategory={setCategory} ></Navi>
      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category} setCategory={setCategory}/>)
        }
      </div>
    </div>
  );
}

export default App;
