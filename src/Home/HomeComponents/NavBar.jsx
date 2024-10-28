import { CiSearch } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi2";
const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100  rounded-lg border">
                <div className="flex-1">
                    <div className="form-control relative">
                        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="input pl-10"
                        />
                    </div>
                </div>
                <div className="flex-none gap-0 md:gap-2">
                    <div className="flex items-center gap-0 md:gap-2">
                        <div className="flex gap-3 md:gap-8">
                            <div>
                                <div className="indicator">
                                    <span className="indicator-item w-6   text-center bg-red-700 text-white rounded-full">1</span>
                                    <div className="text-2xl" ><HiOutlineBell /></div>
                                </div>
                            </div>
                            <div className="text-2xl hidden md:block">
                                <AiOutlineMessage />
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="hidden md:block text-right">
                            <p className="font-bold">Nayamul Roni</p>
                            <p className="gray text-sm">Super Admin</p>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://i.postimg.cc/vBwMMdJ5/admin-dp.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">(Nayamul Roni)</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;