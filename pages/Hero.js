import Image from "next/image"
import Footer from "../components/Footer"
import Navbar from '../components/Navbar'
import zaid from '../public/images/zzz.jpg'
// import Dami from '../public/images/pp.jpg'

const Hero = () => {
    return (
        <>
            <Navbar />
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
                            <span className="block xl:inline">Tentang Saya</span>
                            <span className="block text-teal-500 xl:inline ">Pameran Project</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 pt-3">Hallo semuaya Perkenalakan saya zaid al maghfur dan sekarang saya sedang menjalani pendidikan di Politeknik IDN di jurusan Programmer .</p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start pt-5">
                            <div className="rounded-md  flex justify-center">
                                <a href="/Pdf/zaid_al_maghfur-Cv.pdf" className="w-52 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-black md:py-4 md:text-lg md:px-10 drop-shadow-lg"> Download CV </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3 pb-7  pt-3 flex justify-center">
                                <a href="https://github.com/ZAIDALMAGHFUR" className="w-36 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-teal-200 hover:bg-white md:py-4 md:text-lg md:px-10"> Ke Github </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <div>
                <h1 className="text-teal-500 text-2xl flex justify-center pt-8 pb-3">Next</h1>
                <div>
                    <p className="text-lg pl-14 flex justify-center">Semua hal yang biasa di lakukan </p>
                    <h6 className=" text-lg pl-6 flex justify-center">akan selalu berdampak ke pada si pembuat</h6>
                    <p className="text-center pb-10 pr-5 pl-5">Semua hal yang biasa di lakukan akan selalu medapatkan imbas nya masing
                        masing dan semua nya ada hal yang haru di perhitungkan lagi
                        danoleh karna itu saya membuat web ini secara public dan nantinya
                        ada sebuah course yang bisa di pelajari oleh semua orang yang
                        mengakses nya dan itu saya tujuakan untuk menjadi bekal bagi orang yang
                        ingin masuk ke jenjang yang lebih serius
                    </p>
                </div>
            </div>
            <Footer />
            {/* <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="flex justify-center font-medium  text-2xl mb-1 "> My  <span className="text-teal-500 pl-1 pb-28"> Project</span></h2>
                        <h1 className="sr-only">Products</h1>

                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            <a href="https://zaid15.my.id" className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <Image src={Dami} className={`w-full h-full object-center object-cover group-hover:opacity-75`} alt="Zaid" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700 flex justify-center">Button <span className="pl-2 text-teal-400">Custom</span></h3>
                                <p className="mt-1 text-lg font-medium text-gray-900 flex justify-center">Lihat</p>
                            </a>

                            <a href="https://zaid15.my.id" className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <Image src={Dami} className={`w-full h-full object-center object-cover group-hover:opacity-75`} alt="Zaid" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700 flex justify-center">Nomad Tumbler</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900 flex justify-center">NONE</p>
                            </a>

                            <a href="https://zaid15.my.id" className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <Image src={Dami} className={`w-full h-full object-center object-cover group-hover:opacity-75`} alt="Zaid" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700 flex justify-center">Focus Paper Refill</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900 flex justify-center">NONE</p>
                            </a>

                            <a href="https://zaid15.my.id" className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <Image src={Dami} className={`w-full h-full object-center object-cover group-hover:opacity-75`} alt="Zaid" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700 flex justify-center">Machined Mechanical Pencil</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900 flex justify-center">NONE</p>
                            </a>
                        </div>
                    </div>
                </div> */}

        </>
    )
}

export default Hero;