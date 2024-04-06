import { useState, useLayoutEffect, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faAngleUp, faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Helps() {
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

    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const handelprev = () => {
        if (activeTab > 0) {
            setActiveTab(activeTab - 1);
        }
    }
    const handelnext = () => {
        if (activeTab < 3) {
            setActiveTab(activeTab + 1);
        }
    }
    return (
        <div className={`transition-opacity duration-[3000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={componentRef}>
            <div className="mt-[100px]">
                <div className="lg:text-6xl md:text-3xl text-xl lg:px-[100px] md:px-[60px] px-[30px] font-bold">How Fibery helps you…</div>
                <div className={`bg-slate-100 md:ml-[70px] mt-[70px] py-[50px] ${isMdScreen ? 'pl-[50px]' : 'p-[50px]'}`}>
                    <div className="flex flex-wrap">
                        <div className="md:basis-1/3 basis-full p-10">
                            <div className="md:block hidden">
                                <div className="mb-20">
                                    <button onClick={() => handleTabChange(0)} >
                                        <div className={activeTab === 0 ? 'text-start  opacity-100' : 'text-start  opacity-35 hover:opacity-100'}>
                                            <div className={activeTab === 0 ? 'text-[#05c2b5] font-bold text-2xl mb-2' : 'font-bold text-2xl mb-2'}>
                                                <div className="flex gap-5">
                                                    <div>Product manager</div><div><FontAwesomeIcon icon={faCirclePlay} style={activeTab === 0 ? { color: "#05c2b5", } : { color: '#000000' }} /></div>
                                                </div>
                                            </div>
                                            <div>Always remain on the top of "Why are we building that?" type of questions.</div>
                                        </div>
                                    </button>
                                </div>
                                <div className=" mb-20">
                                    <button onClick={() => handleTabChange(1)}>
                                        <div className={activeTab === 1 ? 'text-start  opacity-100' : 'text-start  opacity-35 hover:opacity-100'}>
                                            <div className={activeTab === 1 ? 'text-[#05c2b5] font-bold text-2xl mb-2' : 'font-bold text-2xl mb-2'}>
                                                <div className="flex gap-5">
                                                    <div>Founders</div><div><FontAwesomeIcon icon={faCirclePlay} style={activeTab === 1 ? { color: "#05c2b5", } : { color: '#000000' }} /></div>
                                                </div>
                                            </div>
                                            <div>Break down silos between your departments. Bridge the gap between strategy and execution. Validate ideas, research your market, and get stuff done.</div>
                                        </div>
                                    </button>
                                </div>
                                <div className=" mb-20">
                                    <button onClick={() => handleTabChange(2)} >
                                        <div className={activeTab === 2 ? 'text-start  opacity-100' : 'text-start  opacity-35 hover:opacity-100'}>
                                            <div className={activeTab === 2 ? 'text-[#05c2b5] font-bold text-2xl mb-2' : 'font-bold text-2xl mb-2'}>
                                                <div className="flex gap-5">
                                                    <div>Operations</div><div><FontAwesomeIcon icon={faCirclePlay} style={activeTab === 2 ? { color: "#05c2b5", } : { color: '#000000' }} /></div>
                                                </div>
                                            </div>
                                            <div>Build processes that are specific to your company's workflow.</div>
                                        </div>
                                    </button>
                                </div>
                                <div className=" mb-20">
                                    <button onClick={() => handleTabChange(3)}>
                                        <div className={activeTab === 3 ? 'text-start  opacity-100' : 'text-start  opacity-35 hover:opacity-100'}>
                                            <div className={activeTab === 3 ? 'text-[#05c2b5] font-bold text-2xl mb-2' : 'font-bold text-2xl mb-2'}>
                                                <div className="flex gap-5">
                                                    <div>Software engineering</div><div><FontAwesomeIcon icon={faCirclePlay} style={activeTab === 3 ? { color: "#05c2b5", } : { color: '#000000' }} /></div>
                                                </div>
                                            </div>
                                            <div>Collaborate on backlogs, sprints, releases, and development wiki — all in one place. Replace most of your stack with a single tool.</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="md:hidden block">
                                {activeTab === 0 && (
                                    <div className={activeTab === 0 ? 'text-start  opacity-100' : 'text-start  opacity-35 hover:opacity-100'}>
                                        <div className={activeTab === 0 ? 'text-[#05c2b5] font-bold text-2xl mb-2' : 'font-bold text-2xl mb-2'}>
                                            <div className="flex gap-5">
                                                <div>Product manager</div><div><FontAwesomeIcon icon={faCirclePlay} style={activeTab === 0 ? { color: "#05c2b5", } : { color: '#000000' }} /></div>
                                            </div>
                                        </div>
                                        <div>Always remain on the top of "Why are we building that?" type of questions.</div>
                                    </div>
                                )}
                                {activeTab === 1 && (
                                    <div className={activeTab === 1 ? 'text-start  opacity-100' : 'text-start  opacity-35 hover:opacity-100'}>
                                        <div className={activeTab === 1 ? 'text-[#05c2b5] font-bold text-2xl mb-2' : 'font-bold text-2xl mb-2'}>
                                            <div className="flex gap-5">
                                                <div>Founders</div><div><FontAwesomeIcon icon={faCirclePlay} style={activeTab === 1 ? { color: "#05c2b5", } : { color: '#000000' }} /></div>
                                            </div>
                                        </div>
                                        <div>Break down silos between your departments. Bridge the gap between strategy and execution. Validate ideas, research your market, and get stuff done.</div>
                                    </div>
                                )}
                                {activeTab === 2 && (
                                    <div className={activeTab === 2 ? 'text-start  opacity-100' : 'text-start  opacity-35 hover:opacity-100'}>
                                        <div className={activeTab === 2 ? 'text-[#05c2b5] font-bold text-2xl mb-2' : 'font-bold text-2xl mb-2'}>
                                            <div className="flex gap-5">
                                                <div>Operations</div><div><FontAwesomeIcon icon={faCirclePlay} style={activeTab === 2 ? { color: "#05c2b5", } : { color: '#000000' }} /></div>
                                            </div>
                                        </div>
                                        <div>Build processes that are specific to your company's workflow.</div>
                                    </div>
                                )}
                                {activeTab === 3 && (
                                    <div className={activeTab === 3 ? 'text-start  opacity-100' : 'text-start  opacity-35 hover:opacity-100'}>
                                        <div className={activeTab === 3 ? 'text-[#05c2b5] font-bold text-2xl mb-2' : 'font-bold text-2xl mb-2'}>
                                            <div className="flex gap-5">
                                                <div>Software engineering</div><div><FontAwesomeIcon icon={faCirclePlay} style={activeTab === 3 ? { color: "#05c2b5", } : { color: '#000000' }} /></div>
                                            </div>
                                        </div>
                                        <div>Collaborate on backlogs, sprints, releases, and development wiki — all in one place. Replace most of your stack with a single tool.</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="md:basis-2/3 basis-full">
                            {activeTab === 0 && (
                                <div><img className={`h-full w-full ${isMdScreen ? 'rounded-l-3xl' : 'rounded-3xl'} drop-shadow-xl`} alt="freepick" src="https://img.freepik.com/free-vector/spreadsheets-concept-illustration_114360-736.jpg?w=740" /></div>
                            )}

                            {activeTab === 1 && (
                                <div><img className={`h-full w-full ${isMdScreen ? 'rounded-l-3xl' : 'rounded-3xl'} drop-shadow-xl`} alt="freepick" src="https://img.freepik.com/free-vector/office-table-top-view-business-flat-web-infographic-concept-staff-around-table-report-analytics-working-tablet-laptop-empty-background-brainstorm-report-planning-creative-people-collection_126523-1374.jpg?w=740" /></div>
                            )}

                            {activeTab === 2 && (
                                <div><img className={`h-full w-full ${isMdScreen ? 'rounded-l-3xl' : 'rounded-3xl'} drop-shadow-xl`} alt="freepick" src="https://img.freepik.com/free-vector/people-office-scenes-set_23-2148089780.jpg?w=740" /></div>
                            )}
                            {activeTab === 3 && (
                                <div><img className={`h-full w-full ${isMdScreen ? 'rounded-l-3xl' : 'rounded-3xl'} drop-shadow-xl`} alt="freepick" src="https://img.freepik.com/free-vector/businesspeople-office_24908-56688.jpg?w=740" /></div>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-x-10 px-10 md:py-0 py-10 md:justify-normal justify-between items-center">
                        <button className="flex rounded-full h-10 w-10 border-2 p-2 border-gray-400 justify-center items-center hover:border-black text-gray-400 hover:text-black " onClick={handelprev}><FontAwesomeIcon className="md:block hidden" icon={faAngleUp} /><FontAwesomeIcon className="md:hidden" icon={faAngleLeft} /></button>
                        <button className="flex rounded-full h-10 w-10 border-2 p-2 border-gray-400 justify-center items-center hover:border-black text-gray-400 hover:text-black " onClick={handelnext}><FontAwesomeIcon className="md:block hidden" icon={faAngleDown} /><FontAwesomeIcon className="md:hidden" icon={faAngleRight} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
