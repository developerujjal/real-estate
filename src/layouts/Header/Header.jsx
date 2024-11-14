import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/log.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../assets/createContext/Contexts';
import ProfileDropDown from '../ProfileDropDown/ProfileDropDown';

const Header = () => {
    // State for controlling menu visibility
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useContext(AuthContext)

    // Function to toggle the menu
    const handleMenuToggle = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

    return (
        <header className="shadow-md">
            <div className="container mx-auto px-3 py-3.5 md:px-12 flex bg-white min-h-[70px] tracking-wide relative z-50">
                <div className="flex flex-wrap items-center justify-between gap-5 w-full">
                    <Link to={'/'} className="mx-auto md:mx-0">
                        <img src={logo} alt="logo" className="w-56" />
                    </Link>

                    {/* Menu Content */}
                    <div
                        className={`lg:block ${menuOpen ? 'block' : 'hidden'} max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
                        id="collapseMenu"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleMenuToggle}
                            className="lg:hidden fixed right-32 top-1 z-[100] rounded-full bg-white p-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                            </svg>
                        </button>

                        {/* Navigation Links */}
                        <ul className="lg:flex gap-x-5 max-lg:space-y-3">
                            <li className="mb-6 hidden max-lg:block">
                                <a>
                                    <img src={logo} alt="logo" className="w-56" />
                                </a>
                            </li>
                            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                <NavLink to="/" className="hover:text-[#1791c8] text-[#1791c8] font-semibold text-base cursor-pointer">Home</NavLink>
                            </li>
                            <li className="max-lg:border-b border-gray-300 font-semibold max-lg:py-3 px-3">
                                <NavLink to="/about" className="hover:text-[#1791c8] text-gray-500 text-base cursor-pointer">About Us</NavLink>
                            </li>
                            <li className="max-lg:border-b border-gray-300 font-semibold max-lg:py-3 px-3">
                                <NavLink to="/services" className="hover:text-[#1791c8] text-gray-500 text-base cursor-pointer">Services</NavLink>
                            </li>
                            <li className="max-lg:border-b border-gray-300 font-semibold max-lg:py-3 px-3">
                                <NavLink to="/contact" className="hover:text-[#1791c8] text-gray-500 text-base cursor-pointer">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Toggle Button */}
                    <div className="flex max-lg:ml-auto space-x-3">
                        {
                            user ?
                                <ProfileDropDown user={user} />
                                :

                                <>
                                    <div className="flex gap-2">
                                        <Link
                                            to={'/sign-in'}
                                            className="px-4 py-2 text-[15px] rounded-full font-bold text-white border-2 border-[#1791c8] bg-[#1791c8] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1791c8]"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to={'/sign-up'}
                                            className="px-4 py-2 text-[15px] rounded-full font-bold text-white border-2 border-[#1791c8] bg-[#1791c8] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1791c8]"
                                        >
                                            Sign up
                                        </Link>
                                    </div>
                                </>
                        }

                        <button onClick={handleMenuToggle} className="lg:hidden">
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
