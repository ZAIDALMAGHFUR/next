import Footer from "../components/Footer";
import zaid from '../public/images/zzz.jpg';
import Web from '../public/images/uui-removebg-preview.png';
import sd from '../public/images/sd.jpg';
import Ig from '../public/images/ig-removebg-preview.png';
import ds from '../public/images/ds.webp';
import Linkidn from '../public/images/linkidn-removebg-preview.png';
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center pt-20 pb-5">
                <h1 className="text-xl text-teal-500">About Me</h1>
            </div>
            <div className="flex justify-center  pb-20 ">
                <div className="bg-slate-200 w-[21rem] h-[38rem] rounded-2xl">
                    <div className="pl-7 pt-7">
                        <div className="h-36 w-36 flex  rounded-full">
                            <Image src={zaid} className={`rounded-full`} alt="Zaid" />
                        </div>
                    </div>
                    <div className="pt-4 pl-6 pr-6">
                        <h4>Hallo saya <span className="text-teal-500 text-lg">Zaid </span> Seorang pengembang web dari INDONESIA, saya sanggat tertarik dengan banyak nya
                            bahasa progra untuk mengembangkan web. </h4>
                    </div>
                    <div className="pt-2 pl-6 pr-6">
                        <h4>saya mulai Berkecimbung di dunia pemprograman dengan mulainya
                            banyak orang yang selalu mengakses segala hal hanya melalui semartphone nya
                            dan itu biasanya  di lakukan dengan mengakses web.
                        </h4>
                    </div>
                    <div className="pt-2 pl-6 pr-6">
                        <h4>Jadi saya banyak melakuakn open source di github dan terutama
                            dengan project dengan gaya yang banyak styling nya
                        </h4>
                    </div>
                </div>
            </div>
            <div className="flex justify-center  pb-20 ">
                <div className="bg-slate-200 w-[21rem] h-[38rem] rounded-2xl">
                    <div className="pt-4 pl-6 pr-6">
                        <h1 className="text-xl text-teal-500">Exsperience</h1>
                    </div>
                    <div className="flex">
                        <div className="flex h-14 w-20 pl-6 py-3">
                            <Image src={Web} className={``} alt="Zaid" />
                        </div>
                        <div className="pt-3 pl-2">
                            <h1 className="text-xl text-teal-500">Web Developer</h1>
                        </div>
                    </div>
                    <div className="pt-2 pl-6 pr-6">
                        <h4>Saya sudah mendedikasikan hidup saya sebagai web developer
                            sebagai web developer saya sudah cukup banyak mengerjakn project yang cukup
                            complex.
                        </h4>
                    </div>
                    <div className="pt-4 pl-6 pr-6">
                        <h1 className="text-xl text-teal-500">Social Media</h1>
                    </div>
                    <div className="flex h-20 w-36 pl-6 pt-3">
                        <a href="https://zaid15.my.id"><Image src={Ig} className={``} alt="Zaid" /></a>
                        <div className=" flex h-[6rem]  pb-6">
                            <a href="https://zaid15.my.id"><Image src={Linkidn} className={``} alt="Zaid" /></a>
                        </div>
                    </div>
                    <div className="pt-4 pl-6 pr-6">
                        <h1 className="text-xl text-teal-500">bahasa</h1>
                    </div>
                    <div className="flex h-20 w-36 pl-6 pt-3  ">
                        <a href="https://zaid15.my.id"><Image src={sd} className={``} alt="Zaid" /></a>
                    </div>
                    <div className=" flex h-[6rem]  w-[9rem] pl-6 pt-5">
                        <a href="https://zaid15.my.id"><Image src={ds} className={``} alt="Zaid" /></a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

