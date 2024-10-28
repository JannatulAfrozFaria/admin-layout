import SectionTitle from "../../UtilityComponents/SectionTitle";
import { FiArchive } from "react-icons/fi";

const OrderSummary = () => {
    const OrderStats1 = [
        { id: 1, title: 'Active', number: 389, percentage: 43, value: 80, color: 'text-[#00997e]' },
        { id: 2, title: 'Pending', number: 125, percentage: 20, value: 48, color: 'text-[#41a3ff]' },
        { id: 3, title: 'Refunded', number: 234, percentage: 37, value: 65, color: 'text-[#ffa133]' },
        { id: 4, title: 'Cancelled', number: 234, percentage: 37, value: 65, color: 'text-[#ff1717]' },
    ];
    const OrderStats = [
        { id: 1, title: 'Active', number: 389, percentage: 43, value: 80, color: 'progress-success' },
        { id: 2, title: 'Pending', number: 125, percentage: 20, value: 50, color: 'progress-info' },
        { id: 3, title: 'Refunded', number: 234, percentage: 37, value: 65, color: 'progress-warning' },
        { id: 4, title: 'Cancelled', number: 234, percentage: 37, value: 65, color: 'progress-error' },
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
                        <p className="text-2xl md:text-4xl font-semibold">{item.number}</p>
                        <p className="gray">{item.title}</p>
                    </div>
                ))}
            </div>
            {/* PI-------CHART */}
            <div className="my-6 grid grid-cols-2 gap-4">
                <div></div>
                <div className="grid grid-cols-1 gap-1">
                    {OrderStats.map(item => (
                        <div key={item.id}>
                            <div className="flex justify-between">
                                <p>{item.title} <span className="ml-1">( {item.percentage}% )</span> </p>
                                <p className="gray">{item.number} </p>
                            </div>
                            <progress className={`progress w-full ${item.color} `} value={item.value} max="100"
                            // style={{ color: item.color }}
                            ></progress>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;