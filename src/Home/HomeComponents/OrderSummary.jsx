import SectionTitle from "../../UtilityComponents/SectionTitle";
import { FiArchive } from "react-icons/fi";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderSummary = () => {
    const OrderStats = [
        { id: 1, title: 'Active', number: 389, percentage: 43, value: 80, color: '#00997e' , bar:'progress-success' },
        { id: 2, title: 'Pending', number: 125, percentage: 20, value: 50, color: '#41a3ff' , bar:'progress-info' },
        { id: 3, title: 'Refunded', number: 234, percentage: 37, value: 65, color: '#ffa133' , bar:'progress-warning' },
        { id: 4, title: 'Cancelled', number: 234, percentage: 37, value: 65, color: '#ff1717' , bar:'progress-error' },
    ];
    const chartData = {
        labels: OrderStats.map(item => item.title),
        datasets: [
            {
                data: OrderStats.filter(item => item.id !== 2).map(item => item.number),
                backgroundColor: OrderStats.filter(item => item.id !== 2).map(item => item.color),
                hoverBackgroundColor: OrderStats.filter(item => item.id !== 2).map(item => item.color),
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        borderWidth:10,
        plugins: {
            legend: {
               display: false,
            },
        },
    };

    return (
        <div className="customDiv2">
            <SectionTitle title={'Current Order Summary'} />
             {/* TOTAL----ORDERS */}
            <div className="orderDiv flex justify-between items-center my-4">
                <div className="flex gap-3 items-center font-bold">
                    <FiArchive />
                    <span>125 new Orders!</span>
                </div>
                <button className="manageBtn">Manage Orders</button>
            </div>
            {/* ORDER-DATA------- */}
            <div className="grid grid-cols-4 gap-4">
                {OrderStats.map(item => (
                    <div key={item.id} className="flex flex-col gap-2 justify-center py-4 px-2 md:px-5 border rounded-lg bg-base-100">
                        <p className="text-2xl md:text-4xl font-semibold">{item.number}</p>
                        <p className="gray text-xs md:text-base">{item.title}</p>
                    </div>
                ))}
            </div>
             {/* PI-------CHART */}
            <div className="my-6 grid  grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-5/6 mx-auto flex justify-center">
                    <Doughnut data={chartData} options={chartOptions}  />
                </div>
                <div className="grid grid-cols-1 gap-1">
                    {OrderStats.map(item => (
                        <div key={item.id}>
                            <div className="flex justify-between">
                                <p>{item.title} <span className="ml-1">({item.percentage}%)</span> </p>
                                <p className="gray">{item.number}</p>
                            </div>
                            <progress className={`progress w-full ${item.bar}`} value={item.value} max="100"></progress>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
