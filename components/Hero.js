import React from "react";
import Image from "next/image";
import Pdf from 'next/Pdf'
import zaid from '../public/images/zzz.jpg'


const Hero = () => {
    return (
        <>
            <div>
                <div className="flex justify-center">
                    <div className="h-36 w-36 flex justify-center mt-24 mb-5">
                        <Image src={zaid} className={`rounded-full`} alt="Zaid" />
                    </div>
                </div>
                <div>
                    <h2 className="flex justify-center font-medium  text-2xl mb-1 "> Zaid  <span className="text-teal-500 pl-1"> Al Maghfur</span></h2>
                    <div className="w-full self-center px-4 text-center pt-2">
                        <p>Junior Front End Web Developer</p>
                    </div>
                </div>
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Biodata Saya</span>
                            <span className="block text-teal-500 xl:inline">Pameran Project</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 pt-3">Hallo semuaya Perkenalakan saya zaid al maghfur dan sekarang saya sedang menjalani pendidikan di Politeknik IDN di jurusan Programmer .</p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start pt-5">
                            <div className="rounded-md  pl-20">
                                <a href="../public/Pdf/zaid_al_maghfur-Cv.pdf" className="w-96 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-black md:py-4 md:text-lg md:px-10"> Download CV </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3 pb-7 pl-32 pt-3">
                                <a href="https://github.com/ZAIDALMAGHFUR" className="w-72 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-teal-200 hover:bg-white md:py-4 md:text-lg md:px-10"> Ke Github </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Hero;