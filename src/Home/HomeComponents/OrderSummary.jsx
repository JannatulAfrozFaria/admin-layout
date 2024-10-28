import SectionTitle from "../../UtilityComponents/SectionTitle";
import { FiArchive } from "react-icons/fi";

const OrderSummary = () => {
    const OrderStats = [
        { id: 1, title: 'Restaurant Account', number: 10 },
        { id: 2, title: 'Restaurant Onboarding', number: 10 },
        { id: 3, title: 'Rider Partners', number: 10 },
        { id: 4, title: 'Rider Onboarding', number: 10 },
        { id: 5, title: 'Support Tickets', number: 10 },
    ];
    return (
        <div className="customDiv2"
        >
            <SectionTitle title={'Current Order Summary'}></SectionTitle>
            <div className="orderDiv flex justify-between items-center ">
                <div className="flex gap-3 items-center font-bold">
                    <div> <FiArchive /></div>
                    <div>125 new Orders!</div>
                </div>
                <div>
                    <button className="manageBtn">Manage Orders</button>
                </div>
            </div>
            {/* ORDER-DATA------- */}
            <div className="grid grid-cols-4 gap-4">
            {OrderStats.map(item => (
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

export default OrderSummary;