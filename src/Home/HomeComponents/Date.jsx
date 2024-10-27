

const Date = () => {
    return (
        <div>
             <div className="navbar bg-base-100  rounded-lg border">
                <div className="flex-1">
                    <div className="form-control relative">
                        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="input input-bordered pl-10 w-24 md:w-auto"
                        />
                    </div>
                </div>
                <div className="flex-none gap-0 md:gap-2">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-6 md:gap-8">
                            <div>
                                <div className="indicator">
                                    <span className="indicator-item w-6   text-center bg-red-700 text-white rounded-full">1</span>
                                    <div className="text-2xl" ><HiOutlineBell /></div>
                                </div>
                            </div>
                            <div className="text-2xl">
                                <AiOutlineMessage />
                            </div>
                        </div>
                        <div className="flex gap-2 navbar customDiv ">
                           <div>
                            <img src="https://i.postimg.cc/gJwd0ywd/date.png" alt="calender-logo" />
                           </div>
                            <p className="font-semibold ">Custom Date</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Date;