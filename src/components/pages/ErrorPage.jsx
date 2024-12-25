import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../../assets/lottie/error.json'
import Lottie from 'lottie-react';

const ErrorPage = () => {
    const navigate = useNavigate(); // Hook to navigate

    // Function to handle the redirection to home
    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
            <div className='h-80 w-80'>
                <Lottie animationData={error}></Lottie>
            </div>
            <h1 className="text-3xl font-semibold text-gray-700 mb-4">Oops! Page Not Found</h1>
            <button 
                onClick={goToHome}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
                Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;
