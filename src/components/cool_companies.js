import { useState, useEffect, useRef } from "react";

export default function CoolCompanies() {
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
        <div className={`transition-opacity duration-[3000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={componentRef} >
            <div className="lg:px-[100px] md:px-[60px] px-[30px] py-[30px] animated-component">
                <div className="flex justify-between items-center md:flex-nowrap flex-wrap">
                    <div className="font-bold text-gray-400 space-x-1 text-lg">Be among 300+ cool companies</div>
                    <div className="text-[#05c2b5] font-bold hover:cursor-pointer"><em>Check out all customer stories →</em></div>
                </div>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
                    <div className="">
                        <img className="h-[170px] w-[200px]" alt="freepick" src="https://img.freepik.com/free-vector/social-network-logo-template_1071-54.jpg?w=740" />
                    </div>
                    <div className="">
                        <img className="h-[170px] w-[200px]" alt="freepick" src="https://img.freepik.com/free-vector/abstract-colorful-floral-shape-with-logo_1035-8982.jpg?w=740" />
                    </div>
                    <div className="">
                        <img className="h-[170px] w-[200px]" alt="freepick" src="https://img.freepik.com/free-vector/geometrical-logo-warm-tones_1043-156.jpg?w=740" />
                    </div>
                    <div className="">
                        <img className="h-[170px] w-[200px]" alt="freepick" src="https://img.freepik.com/free-vector/abstract-logo-triangular-shape_1043-1.jpg?w=740" />
                    </div>
                    <div className="">
                        <img className="h-[170px] w-[200px]" alt="freepick" src="https://img.freepik.com/free-vector/logo-with-shape-3d_1043-51.jpg?w=740" />
                    </div>
                    <div className="">
                        <img className="h-[170px] w-[200px]" alt="freepick" src="https://img.freepik.com/free-vector/abstract-colors-waves-logo_1043-106.jpg?w=740" />
                    </div>
                </div>
            </div>
        </div>
    );
}