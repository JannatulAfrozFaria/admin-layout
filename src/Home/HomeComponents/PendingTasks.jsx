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
        <div className="customDiv2">
            <SectionTitle title={'Pending Tasks'}></SectionTitle>
            <div className="grid grid-cols-1 gap-4">
                {pendingItems.map(item => (
                    <div key={item.id} className="flex justify-between gap-4 items-center py-2 px-5  border rounded-lg bg-base-100 font-semibold text-lg ">
                        <div className="">
                            <p className="">{item.title}</p>
                        </div>
                        <div className="pendingNumber">
                            <p className="">{item.number}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PendingTasks;