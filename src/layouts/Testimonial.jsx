import { useEffect, useState } from "react";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";


const Testimonial = () => {
    const [testimonies, setTestimonies] = useState([])

    useEffect(() => {
        fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonies(data))
            .catch(error => console.error(error))
    }, [])


    return (
        <section id="testimonies" className="py-20 bg-[#F8F8F8]">
            <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


                <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                        <div
                            className="inline-block px-3 py-1 text-sm font-semibold text-[#1F313F] rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                            Words from Others
                        </div>
                        <h1 className="mb-5 text-4xl md:text-5xl font-semibold text-[#1F313F] md:text-center">
                            It&apos;s not just us.
                        </h1>
                        <p className="text-xl text-[#1F313F] md:text-center md:text-2xl">
                            Here&apos;s what others have to say about us.
                        </p>
                    </div>
                </div>


                <div className="text-center">


                    <ul className="flex flex-col gap-5 flex-wrap md:flex-row">
                       {
                        testimonies.map((testi, index) => <TestimonialCard testiInfo={testi} key={index} />)
                       }
                    </ul>



                </div>
            </div>
        </section>
    );
};

export default Testimonial;