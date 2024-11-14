import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HeroSlider = () => {
    const slides = [

        {
            image: 'https://i.ibb.co.com/VvwtLph/bedroom-1872196-960-720-2.jpg',
            title: 'Family-Friendly Suburban Townhouse',
            subtitle: 'A warm, inviting townhouse designed with family comfort in mind, this space offers multiple bedrooms, a large kitchen, and a private backyard. Located in a friendly suburban neighborhood, this home is surrounded by excellent schools, parks, and community centers. With its spacious layout and ample storage, it’s perfect for families looking to settle down and grow. Enjoy a peaceful setting while still having convenient access to nearby shops, dining, and entertainment options.',
            buttonText: 'Explore Now'
        },
        {
            image: 'https://i.ibb.co.com/p2zrPyt/room1.jpg',
            title: 'Elegant Urban Townhouse',
            subtitle: 'Discover an exquisite townhouse that blends modern design with spacious interiors, perfect for city dwellers seeking both luxury and convenience. This home features high ceilings, large windows, and sleek finishes, creating a bright and airy atmosphere. Located in a prime urban area, you’ll have easy access to trendy cafes, shopping districts, and public transit. Ideal for professionals and families alike, this townhouse offers a unique balance of privacy and connectivity to the vibrant city life outside.',
            buttonText: 'Discover More'
        },
        {
            image: 'https://i.ibb.co.com/2Z9p0rN/room3.jpg',
            title: 'Luxurious Riverside Townhouse',
            subtitle: 'This stunning townhouse offers luxury living by the river, with expansive views and beautifully designed interiors. Large windows and open-concept rooms maximize natural light and create a connection with the tranquil surroundings. Each room is crafted with fine details and premium finishes, ideal for those seeking a sophisticated lifestyle. Enjoy a spacious deck perfect for entertaining, and take in the serene river views right from your home, offering a retreat-like feel every day.',
            buttonText: 'View Details'
        }
    ];
    

    return (
        <div className="relative">
            <Swiper
                className='h-[100%] md:h-[100vh]'
                spaceBetween={50}
                slidesPerView={1}

            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="absolute z-1 inset-0 bg-black opacity-50"></div>
                            <div className="relative z-0 flex items-center justify-center text-center text-white h-full">
                                <div className='py-5 px-1 md:px-64'>
                                    <h1 className="text-4xl md:text-5xl font-bold text-[#000000]">{slide.title}</h1>
                                    <p className="text-lg md:text-xl mt-7">{slide.subtitle}</p>
                                    <button className="mt-6 px-6 py-2 bg-[#1791c8] text-white rounded-full hover:border-[#1791c8] text-[#1791c8]">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;



/* 
import room1 from '../assets/slider/room1.jpg';
import room2 from '../assets/slider/room2.jpg';
import room3 from '../assets/slider/room3.jpg';
 */