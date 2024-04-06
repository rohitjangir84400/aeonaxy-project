import { useState, useEffect, useRef } from "react";

export default function RealFeedback({ content, name }) {
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
            <div className="lg:px-[100px] md:px-[60px] px-[30px] pt-[100px] animated-component">
                <div className="md:text-3xl text-xl font-bold">Some real feedback:</div>
                <div className="p-10 mt-20 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-black-watercolor-background_53876-99375.jpg?w=996')" }}>
                    <div className="md:text-3xl text-xl mt-10">{content}</div>
                    <div className="flex items-center justify-between mt-10 flex-wrap">
                        <div className="flex items-center gap-10 flex-wrap">
                            <div className="flex items-center gap-5">
                                <div><img className="h-[70px] w-[70px] rounded-full" alt="freepick" src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
                                <div>
                                    <p>{name}</p>
                                    <p>Director, Product & Growth</p>
                                </div>
                            </div>
                            <div className="sm:mb-0 mb-5">
                                <img className="h-[100px] w-[100px]" alt="freepick" src="https://img.freepik.com/free-vector/abstract-colors-waves-logo_1043-106.jpg?w=740" />
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#242938] text-white px-8 py-3 w-full">See full review</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}