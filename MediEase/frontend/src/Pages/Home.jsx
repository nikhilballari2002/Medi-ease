import Navbar from "../Components/Navbar"; 
import List from "../Components/List";

const Home = () => {
    return (
        <div className="bg-green-normal flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center flex-grow">
                <div className="m-10 w-11/12 h-full bg-white rounded-3xl">
                    <List />
                </div>
            </div>
        </div>
    );
};


export default Home;