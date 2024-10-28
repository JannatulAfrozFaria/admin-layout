import SectionTitle from "../../UtilityComponents/SectionTitle";
import ReactApexChart from "react-apexcharts";

const Revenue = () => {
    const series = [
        {
            name: 'Revenue',
            data: [0, 100, 60, 200, 100, 250, 200, 350, 300, 450, 400, 500]
        }
    ];

    const options = {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            colors: ['#a1045a']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                type: 'vertical',
                opacityFrom: 0.5,
                opacityTo: 0,
                colorStops: [
                    { offset: 0, color: '#d5a4bd', opacity: 1 }, 
                    { offset: 100, color: '#ffffff', opacity: 0 }
                ]
            }
        },
        grid: {
            show: true,
            borderColor: '#f0f0ef', 
            strokeDashArray: 4,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } }
        },
        xaxis: {
            type: 'datetime',
            categories: [
                "2018-09-19T00:00:00.000Z", 
                "2018-09-19T02:00:00.000Z", 
                "2018-09-19T04:00:00.000Z", 
                "2018-09-19T06:00:00.000Z", 
                "2018-09-19T08:00:00.000Z", 
                "2018-09-19T10:00:00.000Z", 
                "2018-09-19T12:00:00.000Z",
                "2018-09-19T14:00:00.000Z",
                "2018-09-19T16:00:00.000Z",
                "2018-09-19T18:00:00.000Z",
                "2018-09-19T20:00:00.000Z",
                "2018-09-19T22:00:00.000Z"
            ],
            labels: {
                formatter: (value) => {
                    const date = new Date(value);
                    return `${String(date.getUTCHours()).padStart(2, '0')}hr`;
                },
                style: {
                    colors: '#141414',
                    fontSize: '12px',
                    fontFamily: 'Urbanist, sans-serif'
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (value) => `AED ${value}`,
                style: {
                    colors: '#141414',
                    fontSize: '12px',
                    fontFamily: 'Urbanist, sans-serif'
                }
            }
        },
        tooltip: {
            followCursor: false,
            shared: false,
            x: { show: false },
            y: {
                formatter: (value) => `${value}`,
                title: { formatter: () => '' }
            },
            style: {
                fontSize: '16px',
                fontFamily: 'Urbanist, sans-serif',
                color: '#000000'
            },
            theme: 'light',
            marker: {
                show: true,
                fillColors: ['#FFFFFF'],
                strokeColors: ['#a1045a'],
                strokeWidth: 2,
                radius: 4
            },
            background: {
                enabled: true,
                color: '#ffffff',
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 5,
                    color: '#000',
                    opacity: 0.15
                },
                borderRadius: 4
            }
        }
    };

    return (
        <div className="customDiv2">
            <SectionTitle title={'Revenue 600 AED'} />
            <div id="chart">
                <ReactApexChart options={options} series={series} type="area" height={350} />
            </div>
        </div>
    );
};

export default Revenue;

