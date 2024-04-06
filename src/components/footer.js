import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faStar, faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect, useRef } from 'react';

export default function Footer() {
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
            <div className='px-10 py-[50px]'>
                <div className='flex flex-wrap gap-y-5'>
                    <div className='lg:basis-1/4 basis-full flex lg:flex-col flex-wrap lg:gap-[100px] lg:justify-normal justify-between gap-y-5'>
                        <div>
                            <div><span className=' text-xl font-bold'>Fibery</span> <sup><FontAwesomeIcon icon={faStarOfLife} style={{ color: "#05c2b5", }} /></sup></div>
                            <div>Work & knowledge <br /> management hub</div>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /></div>
                            <div>Rated 4.8 on <br /> G2 and Capterra</div>
                            <div className='flex gap-x-2 items-center'>
                                <img className='h-[70px] w-[70px]' alt='freepick' src='https://img.freepik.com/free-vector/octopus-business-logo-blue-shades_23-2148475308.jpg?w=740' />
                                <img className='h-[70px] w-[70px]' alt='freepick' src='https://img.freepik.com/free-vector/hand-drawn-cobra-logo-template_23-2149199265.jpg?w=740' />
                            </div>

                        </div>
                    </div>
                    <div className='lg:basis-3/4 basis-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-5 lg:gap-y-0 gap-y-3' >
                        <div>
                            <div className='font-bold mb-3'>Solutions</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>No code</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Product management</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>User research</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Startup</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Software development</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Digital agency</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Template Library</div>
                        </div>
                        <div>
                            <div className='font-bold mb-3'>Product</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Features</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Fibery AI <span className='bg-black text-white px-1 rounded-2xl'>new</span></div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Pricing</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Fibery vs. X</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Customer stories</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Integrations</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Changelog</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Partners program</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Startup program</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Anxiety <span className='bg-black text-white px-1 rounded-2xl'>fun</span></div>
                        </div>
                        <div>
                            <div className='font-bold mb-3'>Resources</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Getting Started</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Expert Help</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Blog</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>User Guide</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Community</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Webinars & Tutorials</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>API</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Status</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Desktop App</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Browser Extension</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Security & Privacy</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Cookie settings</div>
                        </div>
                        <div>
                            <div className='font-bold mb-3'>Team</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>About us</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Open startup</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Startup diary</div>
                            <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Careers</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-20'>
                    <div className='flex items-center gap-2 border-b-2 border-black sm:basis-2/3 basis-full'>
                        <div className='w-full'>
                            <input className='w-full p-2 text-gray-700 appearance-none bg-transparent border-none leading-tight focus:outline-none' type='text' placeholder='Search for a template, space or integration...' />
                        </div>
                        <div className='hover:cursor-pointer'><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000", }} /></div>
                    </div>
                </div>
                <div className='flex justify-between items-center flex-wrap gap-y-5'>
                    <div className='flex items-center gap-5 flex-wrap hover:cursor-pointer'>
                        <div className='hover:text-slate-300'>© Fibery Limited</div>
                        <div className='hover:text-slate-300'>Terms</div>
                        <div className='hover:text-slate-300'>Privacy Policy</div>
                        <div className='hover:text-slate-300'>Cookies Policy</div>
                    </div>
                    <div className='flex items-center gap-3 flex-wrap hover:cursor-pointer'>
                        <div><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div><FontAwesomeIcon icon={faXTwitter} /></div>
                        <div><FontAwesomeIcon icon={faYoutube} /></div>
                        <div><FontAwesomeIcon icon={faLinkedinIn} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}