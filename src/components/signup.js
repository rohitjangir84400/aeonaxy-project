import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

export default function Signup() {
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
    return (
        <div className={`transition-opacity duration-[3000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={componentRef}>
            <div className="lg:px-[100px] md:px-[60px] px-[30px] t-10 mt-[100px] h-[400px] bg-cover bg-center animated-component" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/fluid-style-abstract-geometric-figure-banner-with-memphis-effect_1017-45161.jpg?w=900')" }}>
                <div className="lg:text-6xl md:text-3xl text-xl">Signup for free <sup><FontAwesomeIcon icon={faStarOfLife} style={{ color: "#05c2b5", }} /><sub className='text-lg font-bold text-[#05c2b5]'><em>NO CREDIT CARD REQUIRED</em></sub></sup></div>
                <p className="md:text-xl text-sm mt-10">Start building your own work and knowledge management hub</p>
                <div className='bg-[#242938] text-white py-3 w-[200px] text-center mt-10'>Sign up</div>
            </div>
        </div>
    );
}
