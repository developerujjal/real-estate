import Slider from "../../components/Slider";
import AboutHouses from "../../layouts/HomeLayouts/AboutHouses";
import EstatesSection from "../../layouts/HomeLayouts/EstatesSection";
import { useEffect, useState } from "react";

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
            <section>
                <Slider />
            </section>
            <section>
                <AboutHouses />
            </section>
            <section>
                <EstatesSection estatesData={estatesData} />
            </section>
        </>
    );
};

export default Home;