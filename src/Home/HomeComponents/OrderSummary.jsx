import SectionTitle from "../../UtilityComponents/SectionTitle";
import { FiArchive } from "react-icons/fi";

const OrderSummary = () => {
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
            <div className="grid grid-cols-4 gap-4"></div>
        </div>
    );
};

export default OrderSummary;