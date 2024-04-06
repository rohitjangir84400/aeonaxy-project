import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faStarOfLife, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

export default function NavBar() {
    const [openmenu, setOpenmenu] = useState(false);
    function handeloppenmenu() {
        setOpenmenu(!openmenu);
    }
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
            <nav className=' flex justify-between items-center p-5 text-[#242938]'>
                <div className=' flex gap-10 items-center cursor-pointer'>
                    <div>
                        <div><span className=' text-xl font-bold'>Fibery</span> <sup><FontAwesomeIcon icon={faStarOfLife} style={{ color: "#05c2b5", }} /></sup><span className=' text-xs text-[#05c2b5] font-bold'><em>+AI Now!</em></span></div>
                    </div>
                    <div className='lg:flex hidden items-center gap-2 '>
                        <div className=''>Solutions</div>
                        <div><FontAwesomeIcon icon={faCaretDown} style={{ color: "#000000", }} /></div>
                    </div>
                    <div className='lg:flex hidden items-center gap-2'>
                        <div>Product</div>
                        <div><FontAwesomeIcon icon={faCaretDown} style={{ color: "#000000", }} /></div>
                    </div>
                    <div className='lg:flex hidden items-center gap-2'>
                        <div>Resources</div>
                        <div><FontAwesomeIcon icon={faCaretDown} style={{ color: "#000000", }} /></div>
                    </div>
                    <div className='lg:block hidden'>Pricing</div>
                    <div className='lg:flex hidden text-2xl'>...</div>
                </div>
                <div className='hidden lg:flex items-center gap-10 cursor-pointer'>
                    <div className=' hover:underline underline-offset-1'>Login</div>
                    <div>
                        <div className='border-2 border-[#242938] px-3 py-2 text-center'>Get a demo</div>
                    </div>
                    <div>
                        <div className='px-3 py-2 bg-[#242938] text-white text-center'>Sign up</div>
                    </div>
                </div>
                <div className='lg:hidden block cursor-pointer' onClick={handeloppenmenu}>
                    {!openmenu ?
                        <FontAwesomeIcon icon={faBars} style={{ color: "#000000", }} /> : <FontAwesomeIcon icon={faXmark} style={{ color: "#000000", }} />
                    }
                </div>
            </nav>
            {openmenu ?
                <div className='px-10'>
                    <div className='mt-5'>
                        <div className='border-2 border-[#242938] px-3 py-2 text-center'>Get a demo</div>
                    </div>
                    <div className='mt-5'>
                        <div className='px-3 py-2 bg-[#242938] text-white text-center'>Sign up</div>
                    </div>
                    <div className='mt-5'>
                        <div className='font-bold mb-3'>Solutions</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>No code</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Product management</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>User research</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Startup</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Software development</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Digital agency</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Template Library</div>
                    </div>
                    <div className='mt-5'>
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
                    <div className='mt-5'>
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
                    <div className='mt-5'>
                        <div className='font-bold mb-3'>Team</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>About us</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Open startup</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Startup diary</div>
                        <div className='mb-2 cursor-pointer hover:underline underline-offset-1'>Careers</div>
                    </div>
                </div> : ''
            }
        </div>
    );
}


