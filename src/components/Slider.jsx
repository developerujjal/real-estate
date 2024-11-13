import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HeroSlider = () => {
    const slides = [
        {
            image: 'https://i.ibb.co.com/VvwtLph/bedroom-1872196-960-720-2.jpg',
            title: 'Luxury City Apartment',
            subtitle: 'Discover a stylish, high-rise apartment in the heart of the city, offering modern amenities and panoramic views. Ideal for those seeking vibrant urban living.',
            buttonText: 'Get Started'
        },
        {
            image: 'https://i.ibb.co.com/VvwtLph/bedroom-1872196-960-720-2.jpg',
            title: 'Cozy Suburban Retreat',
            subtitle: 'Nestled in a peaceful neighborhood, this apartment provides a warm and inviting space perfect for relaxation, with easy access to local parks and community spots.',
            buttonText: 'Join Now'
        },
        {
            image: 'https://i.ibb.co.com/VvwtLph/bedroom-1872196-960-720-2.jpg',
            title: 'Modern Studio Apartment',
            subtitle: ' A sleek and efficient studio designed for comfort and convenience, perfect for individuals or couples looking to enjoy a lively, connected lifestyle.',
            buttonText: 'Start Practicing'
        }
    ];

    return (
        <section className="relative h-[70vh]">
            <Swiper
                className='h-[100vh]'
                spaceBetween={50}
                slidesPerView={1}

            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative z-10 flex items-center justify-center text-center text-white h-full">
                                <div>
                                    <h1 className="text-4xl font-bold">{slide.title}</h1>
                                    <p className="text-xl mt-4">{slide.subtitle}</p>
                                    <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSlider;



/* 
import room1 from '../assets/slider/room1.jpg';
import room2 from '../assets/slider/room2.jpg';
import room3 from '../assets/slider/room3.jpg';
 */