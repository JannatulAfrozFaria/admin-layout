import SectionTitle from "../../UtilityComponents/SectionTitle";


const ActivityLog = () => {
    const Activities = [
        { id: 1, date:'12-04-2024', time:'10:14 PM', title: 'Modified new item', name: 'Jakit Sarker' },
        { id: 2, date:'12-04-2024', time:'10:14 PM', title: 'Modified new item', name: 'Jakit Sarker' },
        { id: 3, date:'12-04-2024', time:'10:14 PM', title: 'Modified new item', name: 'Jakit Sarker' },
        { id: 4, date:'12-04-2024', time:'10:14 PM', title: 'Modified new item', name: 'Jakit Sarker' },
        { id: 5, date:'12-04-2024', time:'10:14 PM', title: 'New items approved', name: 'Jakit Sarker' },
    ];
    return (
        <div>
            <SectionTitle title={'Activity Log'}></SectionTitle>
            <div className="grid grid-cols-1 gap-4">
                {Activities.map(item => (
                    <div key={item.id} className="flex justify-between gap-4 items-center p-4  border rounded-lg bg-base-100">
                        <div className="">
                            <p className="gray">{item.date} {item.time} </p>
                            <p className="font-semibold text-lg md:text-3xl">{item.title}</p>
                        </div>
                        <div className="">
                            <p className="gray font-semibold">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityLog;