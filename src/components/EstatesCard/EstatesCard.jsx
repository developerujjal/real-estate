import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const EstatesCard = ({ estates }) => {

    const {
        // id,
        image,
        estate_title,
        property_type,
        status,
        bed,
        bath,
        area,
        location
    } = estates;


    return (
        <div className="bg-[#F8F8F8] rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out shadow-none hover:shadow-custom hover:cursor-grab w-full md:w-[30%]">
            <div className="relative">
                <img className="w-full h-60" src={image} alt="" />
                <div className="absolute top-0 right-0 bg-[#1791c8] text-white px-6 py-2.5 my-5 mx-5 rounded-md text-lg font-semibold">{status}
                </div>
            </div>
            <div className="pt-5 px-6 pb-7">
                <div className="flex justify-between items-center">
                    <Link className="border border-[#E3E3E3] rounded px-4 py-1.5 text-lg font-normal cursor-pointer">{property_type}</Link>
                    <p className="text-[#1F313F] text-lg font-semibold"><span>23,000$</span></p>
                </div>
                <div className="flex justify-between my-5">
                    <p className="flex gap-1.5 items-center text-sm font-normal text-[#333F4D]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1791c8"><path d="M280-200h-40l-26-80h-54v-201q0-33 23.5-56t56.5-23v-120q0-33 23.5-56.5T320-760h320q33 0 56.5 23.5T720-680v120q33 0 56.5 23.5T800-480v200h-54l-26 80h-40l-26-80H306l-26 80Zm240-360h120v-120H520v120Zm-200 0h120v-120H320v120Zm-80 200h480v-120H240v120Zm480 0H240h480Z" /></svg>
                        {bed}
                    </p>
                    <p className="flex gap-1.5 items-center text-sm font-normal text-[#333F4D]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1791c8"><path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-240h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h80v240q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Zm-40-120h640v-160H160v160Zm0 0h640-640Z" /></svg>
                        {bath}
                    </p>
                    <p className="flex text-sm items-center gap-1.5 font-normal text-[#333F4D]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1791c8"><path d="M208-120q-37 0-62.5-25.5T120-208v-548q0-29 27-40.5t47 8.5l90 90-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 80 80q20 20 8.5 47T756-120H208Zm32-120h332L240-572v332Z" /></svg>
                        {area}
                    </p>
                </div>
                <h4 className="text-lg font-semibold text-[#1F313F] mb-7">{estate_title}</h4>
                <div className="flex justify-between items-center">
                    <p className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#1791c8"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                        {location}
                    </p>
                    <div className="flex gap-5">
                        <Link
                            className="rounded-full w-9 h-9 flex items-center justify-center bg-white border">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1791c8"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                            </svg>
                        </Link>
                        <Link
                            className="rounded-full w-9 h-9 flex items-center justify-center bg-white border">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1791c8"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

EstatesCard.propTypes = {
    estates: PropTypes.object
}

export default EstatesCard;

