import SectionTitle from "../../UtilityComponents/SectionTitle";
import { FiArchive } from "react-icons/fi";

const OrderSummary = () => {
    const OrderStats = [
        { id: 1, title: 'Active', number: 389, percentage: 43, value: 50 },
        { id: 2, title: 'Pending', number: 125, percentage: 43, value: 50 },
        { id: 3, title: 'Refunded', number: 234, percentage: 43, value: 50 },
        { id: 4, title: 'Cancelled', number: 234, percentage: 43, value: 50 },
    ];
    return (
        <div className="customDiv2"
        >
            <SectionTitle title={'Current Order Summary'}></SectionTitle>
            {/* TOTAL----ORDERS */}
            <div className="orderDiv flex justify-between items-center my-4 ">
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
                    <div key={item.id} className="flex flex-col gap-2 justify-center py-2 px-5  border rounded-lg bg-base-100 ">
                        <p className="text-2xl">{item.number}</p>
                        <p className="gray">{item.title}</p>
                    </div>
                ))}
            </div>
            {/* PI-------CHART */}
            <div className="my-4 grid grid-cols-2 gap-4">
                <div></div>
                <div className="grid grid-cols-1 gap-4">
                    {OrderStats.map(item => (
                        <div key={item.id}>
                            <div className="flex justify-between">
                                <p>{item.title}</p>
                            </div>
                            <progress className="progress progress-success w-56" value={0} max="100"></progress>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;