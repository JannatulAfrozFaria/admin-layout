import SectionTitle from "../../UtilityComponents/SectionTitle";


const ActivityLog = () => {
    const Activities = [
        { id: 1, date:'12-04-2024', time:'10:14 PM', title: 'Modified new item', number: 10 },
        { id: 2, date:'12-04-2024', time:'10:14 PM', title: 'Modified new item', number: 10 },
        { id: 3, date:'12-04-2024', time:'10:14 PM', title: 'Modified new item', number: 10 },
        { id: 4, date:'12-04-2024', time:'10:14 PM', title: 'Modified new item', number: 10 },
        { id: 5, date:'12-04-2024', time:'10:14 PM', title: 'New items approved', number: 10 },
    ];
    return (
        <div>
            <SectionTitle title={'Activity Log'}></SectionTitle>
        </div>
    );
};

export default ActivityLog;