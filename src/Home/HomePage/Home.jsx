import Date from "../HomeComponents/Date";
import NavBar from "../HomeComponents/NavBar";


const Home = () => {
    return (
        <div className="urbanist px-2 md:px-6 py-2">
            <NavBar></NavBar>
            <Date></Date>
        </div>
    );
};

export default Home;