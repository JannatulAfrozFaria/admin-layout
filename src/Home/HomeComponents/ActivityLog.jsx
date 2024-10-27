import SectionTitle from "../../UtilityComponents/SectionTitle";


const ActivityLog = () => {
    const Activities = [
        { id: 1, date:'12-04-2024', time:'10:54 PM', title: 'Restaurant Account', number: 10 },
        { id: 2, date:'12-04-2024', time:'10:54 PM', title: 'Restaurant Onboarding', number: 10 },
        { id: 3, date:'12-04-2024', time:'10:54 PM', title: 'Rider Partners', number: 10 },
        { id: 4, date:'12-04-2024', time:'10:54 PM', title: 'Rider Onboarding', number: 10 },
        { id: 5, date:'12-04-2024', time:'10:54 PM', title: 'Support Tickets', number: 10 },
    ];
    return (
        <div>
            <SectionTitle title={'Activity Log'}></SectionTitle>
        </div>
    );
};

export default ActivityLog;