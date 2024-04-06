import { useState, useEffect, useRef } from "react";

export default function BringWork() {
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
        <div className={`transition-opacity duration-[3000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={componentRef}        >
            <div className="lg:px-[100px] md:px-[60px] px-[30px] pt-[150px] animated-component">
                <div className="flex flex-wrap-reverse">
                    <div className="lg:basis-3/4 basis-full">
                        <div className="lg:text-6xl md:text-3xl text-xl font-bold">Bring work and knowledge under the same roof</div>
                        <div className="md:text-xl text-sm mt-5">One tool for documents, a second tool for task management and another for diagrams? The end result: 🚨 Poor connectivity.</div>
                        <div className="md:text-xl text-sm mt-5">Connect structured data (e.g. tables, kanban boards) with unstructured data (e.g. documents) and always stay in context.</div>
                    </div>
                    <div className="lg:basis-1/4 basis-full lg:mb-0 mb-3">
                        <img className="md:h-[150px] md:w-[150px] h-[100px] w-[100px] rounded-full" alt="freepick" src="https://img.freepik.com/free-vector/business-handshake_23-2147749418.jpg?w=740" />
                    </div>
                </div>
                <div className="mt-[50px] bg-slate-100 px-10 py-8">
                    <div>
                        <img className="h-full w-full" alt="freepick" src="https://img.freepik.com/free-vector/isometric-hiring-process_23-2148632589.jpg?w=826" />
                    </div>
                </div>
            </div>
        </div>
    );
}