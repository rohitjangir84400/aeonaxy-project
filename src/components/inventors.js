import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
export default function Inventors() {
    const images = [
        'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=826',
        'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=826',
        'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826',
        'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=826',
        'https://img.freepik.com/free-photo/attractive-woman-with-charming-smile_176532-10368.jpg?w=826',
        'https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?w=826',
        'https://img.freepik.com/free-photo/glad-young-woman-with-blonde-straight-hair-eyeglasses-having-gentle-smile-being-happy-meet-with-her-boyfriend-student-female-smiling-into-camera-rejoicing-her-success-university_176420-13148.jpg?w=826',
        'https://img.freepik.com/free-photo/smiley-woman-posing-yellow-dress-outdoors_23-2148728588.jpg?w=826'
    ];

    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const top = componentRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount in case the component is already in the viewport

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [scrollPosition, setScrollPosition] = useState(0);
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -100, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 100, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const position = sliderRef.current.scrollLeft;
        setScrollPosition(position);
    };
    return (
        <div className={`transition-opacity duration-[3000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={componentRef}>
            <div className="pt-[100px] mb-[80px]">
                <div className="lg:px-[100px] md:px-[60px] px-[30px] md:text-3xl text-xl mb-[80px] font-bold"><em>Inspired by inventors.</em></div>
                <div className="relative">
                    <div className="overflow-x-auto whitespace-nowrap" style={{ scrollbarWidth: 'none' }} ref={sliderRef} onScroll={handleScroll}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Slide ${index}`} className="inline-block h-50 w-64 hover:scale-95 transition duration-700 ease-in-out grayscale" />
                        ))}
                    </div>

                    <button className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-full ring-2 hover:ring-4 ring-[#05c2b5] ring-inset" onClick={scrollLeft}>
                        <FontAwesomeIcon icon={faLeftLong} style={{ color: "#000205", }} />
                    </button>


                    <button className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-full ring-2 hover:ring-4 ring-[#05c2b5] ring-inset" onClick={scrollRight}>
                        <FontAwesomeIcon icon={faRightLong} style={{ color: "#000205", }} />
                    </button>
                </div>
            </div>
        </div>
    );
}