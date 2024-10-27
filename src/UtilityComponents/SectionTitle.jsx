import { BsThreeDotsVertical } from "react-icons/bs";

const SectionTitle = ({ title }) => {
    return (
        <div>
            <div className="flex justify-between items-center ">
                <div>
                    <p className="font-bold text-xl">{title}</p>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="text-[#858c94] text-xl m-1"><BsThreeDotsVertical /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Details</a></li>
                    </ul>
                </div>
            </div>
            <hr className="bg-gray-100 border border-1 border-gray-100 my-4" />
        </div>

    );
};

export default SectionTitle;