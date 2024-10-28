import SectionTitle from "../../UtilityComponents/SectionTitle";
import { FiArchive } from "react-icons/fi";

const OrderSummary = () => {
    return (
        <div className="customDiv2"
        >
            <SectionTitle title={'Current Order Summary'}></SectionTitle>
            <div className="pendingNumber flex justify-between ">
                <div className="flex gap-4">
                    <div> <FiArchive /></div>
                    <div>125 new Orders!</div>
                </div>

            </div>
        </div>
    );
};

export default OrderSummary;