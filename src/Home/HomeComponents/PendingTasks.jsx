import SectionTitle from "../../UtilityComponents/SectionTitle";

const PendingTasks = () => {
    const pendingItems = [
        { id: 1, title: 'Restaurant Account', number: 10 },
        { id: 2, title: 'Restaurant Onboarding', number: 10 },
        { id: 3, title: 'Rider Partners', number: 10 },
        { id: 4, title: 'Rider Onboarding', number: 10 },
        { id: 5, title: 'Support Tickets', number: 10 },
    ];
    return (
        <div className="customDiv">
            {/* <div className="flex justify-between">
                <div>
                    <p className="font-bold"></p>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1"><BsThreeDotsVertical /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Details</a></li>
                    </ul>
                </div>
            </div> */}
            <SectionTitle title={'Pending Tasks'}></SectionTitle>
            <div className="grid grid-cols-1 gap-4">
                {pendingItems.map(item => (
                    <div key={item.id} className="flex justify-between gap-4 items-center p-4  border rounded-lg bg-base-100">
                        <div className="iconDiv text-3xl">
                            <p className="font-semibold text-lg md:text-3xl">{item.number}</p>
                        </div>
                        <div className="">
                            <p className="gray text-xs md:text-base">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PendingTasks;