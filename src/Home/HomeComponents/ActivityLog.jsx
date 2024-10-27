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
        </div>
    );
};

export default ActivityLog;