import { useState } from "react";

const Date = () => {
    const [activeTab, setActiveTab] = useState("12 months");

    // Array of tab text
    const tabTexts = ["12 months", "30 days", "7 days", "24 hours"];

    const handleTabClick = (tab) => {
        setActiveTab(tab);   
    };

    return (
        <div className="mt-8 mb-6">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="">
                    <div role="tablist" className="customDiv font-semibold tabs tabs-boxed flex items-center gap-2 h-full">
                        {tabTexts.map((tab, index) => (
                            <div key={tab} className="flex items-center">
                                <a
                                    role="tab"
                                    className={`tab text-sm md:text-base ${activeTab === tab ? "activeTab" : ""}`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab}
                                </a>
                                {index < tabTexts.length - 1 && (
                                    <span className="h-6 w-px bg-gray-200"></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2 customDiv ">
                    <div>
                        <img className="w-6" src="https://i.postimg.cc/gJwd0ywd/date.png" alt="calendar-logo" />
                    </div>
                    <p className="font-semibold">Custom Date</p>
                </div>
            </div>
        </div>
    );
};

export default Date;
