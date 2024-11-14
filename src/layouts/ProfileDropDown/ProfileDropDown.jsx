import { useState } from "react";
import PropTypes from 'prop-types';

const ProfileDropDown = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            {/* Dropdown Button */}

            <div
                onClick={toggleDropdown}
                id="dropdownInformationButton"
                data-dropdown-toggle="dropdownInformation"
                className="text-white flex gap-x-2 border-2 border-[#8cd7fa] hover:border-[#1791c8] transition font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center cursor-pointer group">

                <div className="w-7 h-7 rounded-full bg-gray-700">
                    <img className="w-7 h-7 rounded-full" src={user?.photoURL} alt="" />
                </div>
                <div className="text-gray-500">
                    <span className="group-hover:text-[#1791c8]">{user?.displayName ? user?.displayName: 'Barry Allen' }</span>
                </div>


            </div>

            {/* Dropdown Menu */}

            <div
                id="dropdownInformation"
                className={`${isOpen ? 'block opacity-100' : 'hidden opacity-0'
                    } z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-opacity duration-300`}
            >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{user?.displayName ? user?.displayName: 'Barry Allen' }</div>
                    <div className="font-medium truncate">{user.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul>
                <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </div>
    );
};

ProfileDropDown.propTypes = {
    user: PropTypes.object
}


export default ProfileDropDown;
