import SectionTitle from "../../UtilityComponents/SectionTitle";


const ActivityLog = () => {
    const Activities = [
        { id: 1, title: 'Restaurant Account', number: 10 },
        { id: 2, title: 'Restaurant Onboarding', number: 10 },
        { id: 3, title: 'Rider Partners', number: 10 },
        { id: 4, title: 'Rider Onboarding', number: 10 },
        { id: 5, title: 'Support Tickets', number: 10 },
    ];
    return (
        <div>
            <SectionTitle title={'Activity Log'}></SectionTitle>
        </div>
    );
};

export default ActivityLog;