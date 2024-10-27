

const Date = () => {
    return (
        <div>
            <div className=" bg-base-100">
                <div className="flex-1 navbar customDiv">
                    <div className="join">
                        <input className="join-item btn" type="radio" name="options" aria-label="Radio 1" />
                        <input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
                        <input className="join-item btn" type="radio" name="options" aria-label="Radio 3" />
                    </div>
                </div>
                <div className="flex-none gap-0 md:gap-2">
                    <div className="flex items-center gap-2 navbar customDiv ">
                        <div>
                            <img src="https://i.postimg.cc/gJwd0ywd/date.png" alt="calender-logo" />
                        </div>
                        <p className="font-semibold ">Custom Date</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Date;