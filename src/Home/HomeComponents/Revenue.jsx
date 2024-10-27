
import { BsThreeDotsVertical } from "react-icons/bs";
const Revenue = () => {
    return (
        <div className="customDiv">
            <div className="flex justify-between">
                <div>
                    <p className="font-bold">Revenue 600 AED</p>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1"><BsThreeDotsVertical /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Details</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Revenue;