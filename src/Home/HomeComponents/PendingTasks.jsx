import { BsThreeDotsVertical } from "react-icons/bs";
const PendingTasks = () => {
    const items = [
        { id: 1, title: 'Total Customer', number: 3301 },
        { id: 2, title: 'Total Orders', number: 10457 },
        { id: 3, title: 'Completed Orders', number: 3000 },
        { id: 4, title: 'Cancelled Orders', number: 240 },
        { id: 5, title: 'Restaurant Partners', number: 1200 },
        { id: 6, title: 'Rider Partners', number: 3628 },
        { id: 7, title: 'Approved Rider', number: 17349 },
        { id: 8, title: 'Coupons Active', number: 1393 },
    ];
    return (
        <div className="customDiv">
        <div className="flex justify-between">
            <div>
                <p className="font-bold">Pending Tasks</p>
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

export default PendingTasks;