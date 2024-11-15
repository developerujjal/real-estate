import { useContext, useState } from 'react';
import logo from '../../assets/log.png'
import { AuthContext } from '../../assets/createContext/Contexts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebaseConfig/firebase.config';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {

    const { createNewUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')



    const handleSignUp = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photoLink = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        setPasswordError('')
        setEmailError('')

        const letterRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!gmailRegex.test(email)) {
            return setEmailError('Please enter a valid Gmail address.')
        } else if (password.length < 6) {
            return setPasswordError('Password must be at least 7 characters.')
        } else if (!letterRegex.test(password)) {
            return setPasswordError('Password must contain an uppercase letter.')
        } else if (!specialCharRegex.test(password)) {
            return setPasswordError('Password does not contain a special character.')
        }

        createNewUser(email, password)
            .then(userCredential => {
                toast.success('Signed up successfully');
                const user = userCredential.user;
                console.log(user)
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoLink
                });

                signOut(auth);

            })
            .catch(error => {
                const errorMessage = error.message;
                const errorSplit = errorMessage.split('(')[1].split(')')[0];
                const emailError = errorSplit.split('/')[1].replace(/-/g, ' ').replace('email', 'Email');

                toast.error(emailError)

            })
    }


    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <Helmet>
                <title>Sign Up | Real Estate</title>
            </Helmet>
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src={logo}
                            className="w-64 mx-auto" />
                    </div>
                    <form
                        onSubmit={handleSignUp}
                        className="mt-2 flex flex-col items-center">
                        <div className="w-full flex-1 mt-8">

                            <div className="mt- 4 mb-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Sign Up with E-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">

                                <div className="relative flex items-center">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" name='name' required placeholder="Name" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>
                                </div>

                                <div className="relative flex items-center mt-5">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" name='photo' required placeholder="Photo URL" />
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#bbb" className="w-4 h-4 absolute right-4"><path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z" /></svg>
                                </div>

                                <div className="relative flex items-center mt-5">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" name='email' required placeholder="Email" />
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#bbb" className="w-4 h-4 absolute right-4"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                                </div>
                                <p className='text-red-500'><span>{emailError}</span></p>

                                <div className="relative flex justify-center items-center mt-5">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type={showPassword ? 'text' : 'password'} name='password' required placeholder="Password" />

                                    {
                                        showPassword ?
                                            <svg
                                                onClick={() => setShowPassword(!showPassword)}

                                                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute  right-4 cursor-pointer"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" /></svg> :

                                            <svg
                                                onClick={() => setShowPassword(!showPassword)}
                                                xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                            </svg>
                                    }

                                </div>
                                <p className='text-red-500'><span>{passwordError}</span></p>



                                <button
                                    type='submit'
                                    className="mt-5 tracking-wide font-semibold bg-[#1791c8] text-gray-100 w-full py-4 rounded-lg hover:bg-[#000000] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        Sign Up
                                    </span>
                                </button>

                                <ToastContainer />

                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to follow RealState&apos;s
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        <span> Terms of Service</span>
                                    </a>

                                    <span> and </span>

                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-login-bg">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;