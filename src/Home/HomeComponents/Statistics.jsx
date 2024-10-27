import { HiOutlineUser } from "react-icons/hi2";

const Statistics = () => {
    const items = [
        { id: 1, icon: <HiOutlineUser />, title: 'Total Customer', number: 120 },
        { id: 2, icon: <FaCoffee />, title: 'Coffee', number: 85 },
        { id: 3, icon: <FaApple />, title: 'Apples', number: 30 },
        { id: 4, icon: <FaCar />, title: 'Cars', number: 40 },
        { id: 5, icon: <FaLeaf />, title: 'Leaves', number: 70 },
        { id: 6, icon: <FaPlane />, title: 'Planes', number: 10 },
        { id: 7, icon: <FaHeart />, title: 'Hearts', number: 200 },
        { id: 8, icon: <FaBook />, title: 'Books', number: 50 },
    ];
    return (
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-6">
            
        </div>
    );
};

export default Statistics;