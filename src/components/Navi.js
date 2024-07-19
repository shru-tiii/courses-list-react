
function Navi({filterData, category, setCategory}){
    // console.log(filterData);
    function handlebtn(title){
        setCategory(title);
    }

    return(

        <div className="flex flex-wrap justify-around w-[80%] mx-auto mt-4">
            {
                filterData.map((data)=>{
                    return <button className={` text-white  bg-black rounded py-1 px-4 ${category === data.title ? "bg-opacity-60 border border-white":" border-tranparent bg-opacity-40"}`} onClick={()=> handlebtn(data.title)}>{data.title}</button>
                })
            }
        </div>
    );

}
export default Navi;