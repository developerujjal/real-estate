import { Link } from "react-router-dom";

const EstatesSection = () => {
    return (
        <div className="my-20">
            <div className="container mx-auto px-3 md:px-12">
                <div>
                    <div>
                        <span>Pricing Action</span>
                        <div>
                            <h2>Let us help you find the perfect place to call home</h2>
                            <Link>
                                See More
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                            </Link>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstatesSection;