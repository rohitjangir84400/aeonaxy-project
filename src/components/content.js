import { useState, useEffect, useRef } from "react";

export default function Content() {
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
            <div className='lg:px-[100px] md:px-[60px] px-[30px] pt-[150px] animated-component'>
                <div className="md:text-2xl text-xl font-bold"><em>All this content is for you, not for SEO (doesn't work anyway)</em></div>
                <div className="flex p-5 flex-wrap mt-10">
                    <div className="md:basis-1/2 basis-full p-5 bg-slate-100"><img alt="freepick" src="https://img.freepik.com/free-vector/gradient-metaverse-background_23-2149268759.jpg?w=826" /></div>
                    <div className="md:basis-1/2 basis-full p-5">
                        <div className="text-2xl font-bold">
                            How Fibery Uses Fibery for Product Development: 3 Years Later
                        </div>
                        <div className="mt-5">Wondering how the Fibery team uses Fibery for developing… well, Fibery? Join Michael Dubakov as he guides you through the past 3 years of progress since his latest rumination on the topic.</div>
                        <div className='flex gap-2 mt-10 flex-wrap'>
                            <div><img className='h-[50px] w-[50px]' alt="freepick" src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740' /></div>
                            <div>
                                <p>Product Management - November 22,2023/ <span>14 min read</span></p>
                                <p><span>Peter Levay,</span> Everything content at Fibery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 border-t py-10 gap-x-10 gap-y-5">
                    <div className="flex gap-3">
                        <div><img className="h-[60px] w-[60px]" alt="freepick" src='https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=826' /></div>
                        <div>
                            <p className="text-xl font-bold">Fibery <br /> blog</p>
                            <a href="#" className="font-bold text-[#54cbde]">fibery.io/blog</a>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div><img className="h-[60px] w-[60px]" alt="freepick" src='https://img.freepik.com/free-vector/happy-woman-chatting-with-friends-online_74855-14073.jpg?w=740' /></div>
                        <div>
                            <p className="text-xl font-bold">Fibery <br /> community</p>
                            <a href="#" className="font-bold text-[#54cbde]">community.fibery.io</a>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div><img className="h-[60px] w-[60px]" alt="freepick" src='https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740' /></div>
                        <div>
                            <p className="text-xl font-bold">Fibery <br /> on X-twitter</p>
                            <a href="#" className="font-bold text-[#54cbde]">@fibery_io</a>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div><img className="h-[60px] w-[60px]" alt="freepick" src='https://img.freepik.com/free-psd/social-media-logo-design_23-2151296989.jpg?w=740' /></div>
                        <div>
                            <p className="text-xl font-bold">Fibery <br /> on youtube</p>
                            <a href="#" className="font-bold text-[#54cbde]">Ring the bell!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}