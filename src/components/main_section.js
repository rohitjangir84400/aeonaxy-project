import { useState, useEffect, useRef } from "react";

export default function MainSection() {
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
            <div className="lg:px-[100px] md:px-[60px] px-[30px] py-[100px]">
                <div>
                    <div className=" lg:text-7xl md:text-5xl text-3xl font-bold">
                        Build your own <br /> work & knowledge hub
                    </div>
                    <div className="md:text-3xl mt-6 text-xl">If you've outgrown Jira, Notion, Airtable, and ClickUp <br /> — and are ready to replace them</div>
                    <div className="flex items-center mt-5">
                        <div className="md:basis-7/12 basis-full">
                            <div className="flex items-center gap-2 md:flex-nowrap flex-wrap">
                                <div className="border-b-2 border-black hover:border-[#05c2b5] lg:basis-9/12 md:basis-7/12 basis-full">
                                    <input type="email" placeholder="Enter your work email" className="w-full p-2 text-gray-700 appearance-none bg-transparent border-none leading-tight focus:outline-none" />
                                </div>
                                <div className="lg:basis-3/12 md:basis-5/12 basis-full"><div className="w-full text-center px-5 py-2 bg-[#05c2b5] text-white rounded-sm font-bold">Sign up free</div></div>
                            </div>
                            <div className="mt-2">Keep work and life separate by using your work email</div>
                        </div>
                        <div className=" md:basis-5/12 md:flex hidden justify-end ">
                            <img className="h-[150px] w-[250px]" alt="freepick" src="https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?w=900&t=st=1712215260~exp=1712215860~hmac=4b5193f6a3e01add500cea912d9de180bb1cab8f6c0fffc615f84eab1314aa61" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}