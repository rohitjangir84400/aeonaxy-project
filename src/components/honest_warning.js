import { useState, useEffect, useRef } from "react";

export default function HonestWarning({ content, background, likes, com }) {
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
                <div className="md:text-3xl text-xl font-bold">Radically honest warning:</div>
                <div className="mt-20 flex gap-5">
                    <div className="md:basis-5/6 basis-full rounded-2xl p-10" style={{ backgroundColor: background }}>
                        <div className="md:hidden flex justify-center mb-5"><div><img className="rounded-full h-20 w-20" alt='freepick' src="https://img.freepik.com/free-vector/flat-isometric-huge-internet-like-sign-with-young-woman-doing-selfie-photo-smartphone-net-vector_126523-2972.jpg?w=740" /></div></div>
                        <div className="md:text-3xl text-xl">{content}</div>
                        <div className="flex gap-5 mt-5">
                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl drop-shadow-xl hover:ring-4 ring-pink-500 ring-inset">
                                <div><img className="h-10 w-10" alt="freepick" src="https://img.freepik.com/premium-psd/3d-emoji-with-thumbs-up_1102-7803.jpg?w=740" /></div>
                                <div>{likes}</div>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl drop-shadow-xl hover:ring-4 ring-pink-500 ring-inset">
                                <div><img className="h-10 w-10" alt="freepick" src="https://img.freepik.com/free-vector/gradient-shocked-emoji-illustration_23-2150769963.jpg?w=740" /></div>
                                <div>{com}</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:basis-1/6 md:block hidden"><div className="flex h-full justify-center"><img className=" self-end rounded-full h-20 w-20" alt="freepick" src="https://img.freepik.com/free-vector/flat-isometric-huge-internet-like-sign-with-young-woman-doing-selfie-photo-smartphone-net-vector_126523-2972.jpg?w=740" /></div></div>
                </div>
            </div>
        </div>
    );
}