import React from 'react';
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="hero min-h-screen bg-base-200 selection:bg-[#23BE0A] selection:text-white">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    {/* Animated 404 Text with YOUR GREEN COLOR */}
                    <div className="relative">
                        <h1 className="text-9xl font-extrabold text-[#23BE0A] tracking-widest animate-bounce drop-shadow-sm">
                            404
                        </h1>
                        <div className="bg-[#23BE0A] px-2 text-sm rounded rotate-12 absolute top-0 left-16 opacity-80 animate-pulse text-white font-bold shadow-lg">
                            Page Not Found
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-base-content">
                        Oops! Lost in the Woods...
                    </h2>

                    <p className="py-2 text-lg md:text-xl font-medium text-base-content/70">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    {/* Display actual error message */}
                    <p className="mb-8 text-sm text-error font-mono bg-error/10 p-2 rounded-lg inline-block">
                        <i>{error?.statusText || error?.message || "Unknown Error"}</i>
                    </p>

                    {/* Green Button Section */}
                    <div className="flex justify-center gap-4">
                        <Link 
                            to="/" 
                            className="btn btn-lg text-white border-none bg-/[#23BE0A] hover:bg-[#00963f] transition-all duration-300 hover:scale-110 hover:shadow-xl ring-offset-2 focus:ring-2 focus:ring-[#00C853]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;