import Slider from "../../components/Slider";
import AboutHouses from "../../layouts/HomeLayouts/AboutHouses";
import EstatesSection from "../../layouts/HomeLayouts/EstatesSection";

const Home = () => {
    return (
        <>
            <section>
                <Slider />
            </section>
            <section>
                <AboutHouses />
            </section>
            <section>
                <EstatesSection />
            </section>
        </>
    );
};

export default Home;