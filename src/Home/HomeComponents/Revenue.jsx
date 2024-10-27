

const Revenue = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Click</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Details</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Revenue;