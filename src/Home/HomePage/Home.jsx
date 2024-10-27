import Date from "../HomeComponents/Date";
import NavBar from "../HomeComponents/NavBar";
import Revenue from "../HomeComponents/Revenue";
import Statistics from "../HomeComponents/Statistics";


const Home = () => {
    return (
        <div className="urbanist px-2 md:px-6 py-2">
            <NavBar></NavBar>
            <Date></Date>
            <Statistics></Statistics>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Revenue></Revenue>
            </div>
        </div>
    );
};

export default Home;