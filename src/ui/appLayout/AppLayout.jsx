import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Loading from "../loading/loading";

function AppLayout() {
    const navigation=useNavigation()
    console.log(navigation);
    const isLoading=(navigation.state === "loading" )
    return (
        <div className="">
            {isLoading && <Loading />}
            <Header />
            <main className="  md:container mx-auto min-h-screen  ">
                <div className="  my-8 p-4">
                    <Outlet />
                </div>
               
            </main>
           
        </div> 
    )
}

export default AppLayout
