import EstatesCard from "../../components/EstatesCard/EstatesCard";
import PropTypes from 'prop-types';

const EstatesSection = ({ estatesData }) => {

    return (
        <div className="my-20">
            <div className="container mx-auto px-3 md:px-12">
                <div>
                    <div className="mb-14">
                        <div className="flex flex-col md:flex-row justify-between items-center ">
                            <div className="md:w-2/4">
                                <span className="text-base font-medium uppercase text-[#1791c8] ">Pricing Action</span>
                                <h2 className="text-[#1F313F] text-5xl md:text-5xl font-semibold mt-4">Let us help you find the perfect place to call home</h2>
                            </div>
                            <div className="md:w-2/4 text-right">
                                <button className="button-btn md:text-2xl text-white rounded px-10 py-4 bg-[#1791c8] hover:border-[#1791c8] border-2 hover:text-[#1791c8] hover:bg-white">
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14 md:flex-row md:flex-wrap md:justify-between">
                        {
                            estatesData.map(item => <EstatesCard estates={item} key={item.id}/>)
                        }
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

EstatesSection.propTypes = {
    estatesData: PropTypes.array
}

export default EstatesSection;