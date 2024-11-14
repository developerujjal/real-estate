import Slider from "../../components/Slider";
import AboutHouses from "../../layouts/HomeLayouts/AboutHouses";
import EstatesSection from "../../layouts/HomeLayouts/EstatesSection";
import { useEffect, useState } from "react";
import Testimonial from "../../layouts/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const [estatesData, setEstatesData] = useState([])

    useEffect(() => {
        fetch('/estatesData.json')
            .then(res => res.json())
            .then(data => setEstatesData(data))
            .catch(error => console.error(error));
    }, [])


    return (
        <>
            <Helmet>
                <title>Real Estate - Your Dream is Here!</title>
            </Helmet>
            <section>
                <Slider />
            </section>
            <section>
                <AboutHouses />
            </section>
            <section>
                <EstatesSection estatesData={estatesData} />
            </section>
            <section>
                <Testimonial />
            </section>

        </>
    );
};

export default Home;