import { HiOutlineUser ,MdOutlineFeaturedPlayList, GiKnifeFork,  RiMotorbikeLine, PiMotorcycleFill, FaMoneyBillWave, LiaMoneyBillWaveSolid } from "react-icons/hi2";

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
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-6">
            {items.map(item => (
                <div key={item.id} className="flex items-center p-4 border rounded-lg">
                    <div>
                        <span>{item.icon}</span>
                    </div>
                    
                    <div className="ml-2">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p>{item.number}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Statistics;