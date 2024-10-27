import { HiOutlineUser} from "react-icons/hi2";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { RiMotorbikeLine } from "react-icons/ri";
import { PiMotorcycleFill } from "react-icons/pi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

const Statistics = () => {
    const items = [
        { id: 1, icon: <HiOutlineUser />, title: 'Total Customer', number: 3301 },
        { id: 2, icon: <MdOutlineFeaturedPlayList />, title: 'Total Orders', number: 10457 },
        { id: 3, icon: <MdOutlineFeaturedPlayList />, title: 'Completed Orders', number: 3000 },
        { id: 4, icon: <MdOutlineFeaturedPlayList />, title: 'Cancelled Orders', number: 240 },
        { id: 5, icon: <GiKnifeFork />, title: 'Restaurant Partners', number: 1200 },
        { id: 6, icon: <RiMotorbikeLine />, title: 'Rider Partners', number: 3628 },
        { id: 7, icon: <PiMotorcycleFill />, title: 'Approved Rider', number: 17349 },
        { id: 8, icon: <LiaMoneyBillWaveSolid />, title: 'Coupons Active', number: 1393 },
    ];
    return (
        <div className="grid  grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
            {items.map(item => (
                <div key={item.id} className="flex gap-4 items-center p-4  border rounded-lg bg-base-100">
                    <div className="iconDiv text-3xl">
                        <span>{item.icon}</span>
                    </div>
                    <div className="">
                        <p className="font-semibold text-lg md:text-3xl">{item.number}</p>
                        <p className="gray text-xs md:text-base">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Statistics;