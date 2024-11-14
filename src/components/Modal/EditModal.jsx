import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../assets/createContext/Contexts';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditModal = ({ handleCloseModal, isModalOpen }) => {

    const { user } = useContext(AuthContext)

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const newName = form.get('name');
        const newURL = form.get('photo')

        updateProfile(user, {
            displayName: newName,
            photoURL: newURL
        })
            .then(() => {
                toast.success('Profile updated!')
            })
            .catch(error => {
                console.error(error)
                toast.error('An error occurred')
            })

    
    }

    return (
        <div
            className={`fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif] ${isModalOpen || 'hidden'}`}>
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
                <svg
                    onClick={handleCloseModal}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591">
                    <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"></path>
                    <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"></path>
                </svg>


                <form
                    onSubmit={handleUpdateProfile}
                    className="my-8 space-y-4">
                    <div className="flex items-center">
                        <input type="text" name="name" placeholder="Enter Name"
                            className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                    </div>

                    <div className="flex items-center">
                        <input type="text" name="photo" placeholder="Enter Photo URL"
                            className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />

                    </div>


                    <button type="submit"
                        className="px-5 py-2.5 !mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg tracking-wide">Update Profile</button>
                </form>

                <ToastContainer />

                <hr className="my-8 border-gray-300" />


            </div>
        </div>
    );
};

EditModal.propTypes = {
    handleCloseModal: PropTypes.func,
    isModalOpen: PropTypes.bool
}

export default EditModal;