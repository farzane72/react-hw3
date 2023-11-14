import { Link } from "react-router-dom"
function Home() {
    return (
        <div className="w-full min-h-screen bg-zinc-100 flex justify-center items-center flex-col gap-8 ">
            <h1 className="text-2xl font-bold ">
                Welcome to our Shop :))))
            </h1>
            <Link to='/products' className="text-xl font-bold border p-2 rounded-md" >Go to our Shop </Link>
         
        </div>
    )
}

export default Home
