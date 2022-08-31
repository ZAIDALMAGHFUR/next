import Footer from "../components/Footer";
import zaid from '../public/images/zzz.jpg';
import p1 from '../public/images/p1.png';
import p2 from '../public/images/p2.png';
import p3 from '../public/images/p3.png';
import Navbar from '../components/Navbar';
import Image from "next/image";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center pt-20 pb-5">
                <h1 className="text-xl text-teal-500"></h1>
            </div>
            <div className="flex justify-center  pb-20 ">
                <div className="bg-slate-200 w-[21rem] h-[21rem] rounded-2xl">
                    <div className="pl-7 pt-7">
                        <div className="h-36 w-36 flex  rounded-full">
                            <Image src={zaid} className={`rounded-full`} alt="Zaid" />
                        </div>
                    </div>
                    <div className="pt-4 pl-6 pr-6">
                        <h4>Hallo saya <span className="text-teal-500 text-lg">Zaid </span> Seorang pengembang web dari INDONESIA, saya sanggat tertarik dengan banyak nya
                            bahasa progra untuk mengembangkan web. </h4>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <h1 className="text-xl text-teal-500">Portfolio</h1>
            </div>
            <div className="flex justify-center  pb-20 ">
                <div className="bg-slate-200 w-[21rem] h-[38rem] rounded-2xl">
                    <a href="https://zaid15.my.id"><Image src={p1} className={``} alt="Zaid" /></a>
                </div>
            </div>
            <div className="flex justify-center">
                <h1 className="text-xl text-teal-500">ID Shoop</h1>
            </div>
            <div className="flex justify-center  pb-20 ">
                <div className="bg-slate-200 w-[21rem] h-[38rem] rounded-2xl">
                    <a href="https://zaid15.my.id"><Image src={p2} className={``} alt="Zaid" /></a>
                </div>
            </div>
            <div className="flex justify-center">
                <h1 className="text-xl text-teal-500">Custom Button</h1>
            </div>
            <div className="flex justify-center  pb-20 ">
                <div className="bg-slate-200 w-[21rem] h-[38rem] rounded-2xl">
                    <a href="https://github.com/ZAIDALMAGHFUR/button"><Image src={p3} className={``} alt="Zaid" /></a>
                </div>
            </div>

            <Footer />
        </>
    )
}

