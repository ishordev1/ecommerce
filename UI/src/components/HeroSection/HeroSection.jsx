import React from 'react';
import heroImg from '../../assets/img/hero-img.png';

const HeroSection = () => {
    return (
        <div className="relative flex flext-start items-center bg-cover bg-center h-screen w-full text-left" style={{ backgroundImage: `url(${heroImg})`, }}>
            <div className="absolute top-0 right-0 bottom-0 left-0">
                <main className="px-10  lg:px-24 z-10">
                    <div className="text-left">
                        <h2 className="text-2xl text-white">
                            T-shirt/Topss
                        </h2>

                    </div>
                    <p className="mt-3 text-white sm:mt-5 sm:max-w-xl text-6xl">
                        value Pack
                    </p>

                    <p className="mt-3 text-white sm:mt-5 sm:max-w-xl text-2xl">
                        value Pack
                    </p>
                </main>
            </div>
        </div>
    );
};

export default HeroSection;
