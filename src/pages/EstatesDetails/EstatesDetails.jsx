import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const EstatesDetails = () => {

    const [estatesData, setEstatesData] = useState([])
    const { id } = useParams()
    

    useEffect(() => {
        fetch('./estatesData.json')
            .then(res => res.json())
            .then(data => setEstatesData(data))
    }, [])


    const idNum = parseInt(id)
    const match = estatesData.find(item => item.id === idNum)
    

    return (
        <div className="bg-gray-100 px-6 py-12 font-sans">
            <Helmet>
                <title>Estate Details | Your Dream is Here</title>
            </Helmet>
            <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="max-h-80">
                        <img src={match?.image} alt="Image" className="rounded-md object-cover w-full h-full" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-[#1791c8] mb-4">{match?.estate_title}</h2>
                        <p className="text-gray-600 text-sm leading-6">
                            {match?.description}
                        </p>
                        <ul className="list-disc text-sm text-gray-600 space-y-2 pl-4 mt-6">
                            <li>{match?.facilities[0]}</li>
                            <li>{match?.facilities[1]}</li>
                            <li>{match?.facilities[2]}</li>
                        </ul>
                        <div className="mt-6">
                            <a className="text-purple-600 text-sm font-semibold hover:underline">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstatesDetails;