import logo from '../Images/logo.jpeg';
import { useAuthContext } from '../utils/authContext';

const Navbar = () => {
    const {authUser} = useAuthContext();
    console.log(authUser);
    return(
        <div className="w-full bg-green-800 flex items-center justify-between px-4">
            <img src={logo} alt='img' className=' size-20 rounded-full my-6 ml-36'/>
            <div className="flex-1 m-4 mx-96">
                <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full bg-white text-black"
                />
            </div>
            <p className="text-white text-2xl font-semibold mr-36">Dr.{authUser.fullName}</p>
        </div>
    )
}

export default Navbar;

