import { useLayoutEffect, useState, useEffect, useRef } from 'react';

export default function Flexibility() {
    const [isMdScreen, setIsMdScreen] = useState(false);

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

    useLayoutEffect(() => {
        const checkScreenSize = () => {
            setIsMdScreen(window.innerWidth >= 768); // 768px is the breakpoint for md size in Tailwind CSS
        };

        checkScreenSize(); // Initial check

        window.addEventListener('resize', checkScreenSize); // Check on window resize

        return () => window.removeEventListener('resize', checkScreenSize); // Cleanup
    }, []);
    return (
        <div className={`transition-opacity duration-[3000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={componentRef}>
            <div className="flex flex-wrap-reverse lg:px-[100px] md:px-[60px] px-[30px] pt-[150px]">
                <div className="lg:basis-3/4 basis-full">
                    <div className="lg:text-6xl md:text-3xl text-xl font-bold">Flexibility to work <br /> your own way</div>
                    <div className="md:text-xl text-sm mt-5">Stop using workflows & terminologies defined by someone else… not <br /> everything is an "issue" or a "task".</div>
                </div>
                <div className="lg:basis-1/4 basis-full lg:mb-0 mb-3">
                    <img className="md:h-[150px] md:w-[150px] h-[100px] w-[100px] rounded-full" alt='freepick' src="https://img.freepik.com/free-photo/funny-dog-3d-illustration_183364-80166.jpg?w=740" />
                </div>
            </div>
            <div className={`md:ml-[70px] mt-[70px] py-[50px] ${isMdScreen ? 'pl-[50px]' : 'p-[50px]'} flex items-center bg-slate-100 flex-wrap`}>
                <div className="md:basis-1/3 basis-full md:p-10 p-5">Map your processes the way you want by using <span className="bg-[#13CF14] text-white rounded-lg px-1">custom fields</span>,<span className="bg-[#BDF2BD] rounded-lg px-1">custom databases</span>  and <span className="bg-[#BDF2BD] rounded-lg px-1">custom relations</span>.</div>
                <div className="md:basis-2/3 basis-full"><img className={`h-full w-full ${isMdScreen ? 'rounded-l-3xl' : 'rounded-3xl'} drop-shadow-xl`} alt='freepick' src="https://img.freepik.com/free-vector/log-concept-landing-page_23-2148270084.jpg?w=826" /></div>
            </div>
        </div>
    );
}
