import { useState, useEffect, useRef } from "react";

export default function Make() {
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
            <div className="lg:px-[100px] md:px-[60px] px-[30px] pt-[100px]">
                <div className="lg:text-6xl md:text-3xl text-xl font-bold">How you can make it happen</div>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-5 mt-[100px]">
                    <div>
                        <div><img className="h-[170px] w-[170px]" alt="freepick" src="https://img.freepik.com/free-photo/handsome-man-isolated-white-background_1368-4264.jpg?w=740" /></div>
                        <div className="text-xl my-6 font-bold">Signup for free</div>
                        <div>Start using AI space creation and / or templates to test the waters.</div>
                    </div>
                    <div>
                        <div><img className="h-[170px] w-[170px]" alt="freepick" src="https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-businessman-model-dressed-elegant-light-pink-suit-posing-metrosexual_158538-9143.jpg?w=740" /></div>
                        <div className="text-xl my-6 font-bold">Build your workspace</div>
                        <div>Start integrating any data from existing tools and map your company's processes.</div>
                    </div>
                    <div>
                        <div><img className="h-[170px] w-[170px]" alt="freepick" src="https://img.freepik.com/free-photo/portrait-beautiful-happy-young-woman-glasses-white-office-shirt-isolated-white-background_186202-3596.jpg?w=360" /></div>
                        <div className="text-xl my-6 font-bold">Share it with your team</div>
                        <div>Don't keep Fibery to yourself. Be the hero your company needs and not the one they deserve!</div>
                    </div>
                    <div>
                        <div><img className="h-[170px] w-[170px]" alt="freepick" src="https://img.freepik.com/free-photo/beautiful-woman-portrait_144627-27921.jpg?w=826" /></div>
                        <div className="text-xl my-6 font-bold">Enjoy the moment that you dared to be different</div>
                        <div>Humans are pack animals - conformity is in our DNA. But you dared to be different by not choosing an Atlassian product. Well done!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}