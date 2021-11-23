import Link from "next/dist/client/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { Layout } from "../components/Layout";

export default function Page2() {

    const [change, setChange] = useState(false);
    const [change2, setChange2] = useState(false);
    const [slide, setSlide] = useState(false);

    return (
        <Layout><div>
            <div id="top" className="bg-gray-500 text-white grid grid-cols-12">
                <div className="text-4xl font-bold col-span-10 md:col-span-3 ml-4 pt-3 pb-5">
                    <Link href="/">home</Link>
                </div>
                <div className="block md:hidden text-3xl mt-5 hover:cursor-pointer"
                    onClick={() => setChange(!change)}>
                    <GiHamburgerMenu />
                </div>
                <div className={`${change ? "pl-6 py-2 border-t" : "hidden"} col-span-12  md:col-span-1 md:block md:mt-6 text-gray-300
                hover:text-white hover:cursor-pointer hover:transition`}>
                    menu1
                </div>
                <div className={`${change ? "pl-6 py-2 border-t" : "hidden"} col-span-12  md:col-span-1 md:block md:mt-6 text-gray-300
                hover:text-white hover:cursor-pointer hover:transition`}>
                    menu2
                </div>
                <div className={`${change ? "pl-6 py-2 border-t" : "hidden"} col-span-12  md:col-span-1 md:block md:mt-6 text-gray-300
                hover:text-white hover:cursor-pointer hover:transition`}>
                    menu3
                </div>
                <div className="hidden md:block col-end-11 bg-gray-400 py-6 pl-4 lg:w-0 lg:pr-14
                hover:bg-gray-300 hover:text-black hover:transition hover:cursor-pointer">Login</div>
            </div>


            <div id="top" className="bg-gray-500 text-white grid grid-cols-12">
                <div className="text-4xl font-bold col-span-10 md:col-span-3 ml-4 pt-3 pb-5">
                    <Link href="/">home</Link>
                </div>
                <div className="block md:hidden text-3xl mt-5 hover:cursor-pointer"
                    onClick={() => setChange2(!change2)}>
                    <GiHamburgerMenu />
                </div>
                <div className={`${change2 ? "pl-6 py-2 border-t z-10" : "hidden"} col-span-12  md:col-span-1 md:block md:mt-6 text-gray-300
                hover:text-white hover:cursor-pointer hover:transition`}>
                    menu1
                </div>
                <div className={`${change2 ? "pl-6 py-2 border-t" : "hidden"} col-span-12  md:col-span-1 md:block md:mt-6 text-gray-300
                hover:text-white hover:cursor-pointer hover:transition`}>
                    menu2
                </div>
                <div className={`${change2 ? "pl-6 py-2 border-t" : "hidden"} col-span-12  md:col-span-1 md:block md:mt-6 text-gray-300
                hover:text-white hover:cursor-pointer hover:transition`}>
                    menu3
                </div>
                <div className="hidden md:block col-end-11 bg-gray-400 py-6 pl-4 lg:w-0 lg:pr-14
                hover:bg-gray-300 hover:text-black hover:transition hover:cursor-pointer">Login</div>
            </div>
        </div>

            <div className="inline-block ml-[50%] mb-3 p-1 cursor-pointer" onClick={() => setSlide(!slide)}>
                <p className="w-[30px] h-[2px] bg-black mb-[6px]"></p>
                <p className="w-[30px] h-[2px] bg-black mb-[6px]"></p>
                <p className="w-[30px] h-[2px] bg-black"></p>
            </div>

            {/* 黒い画面 */}
            {slide && <div className={`bg-black opacity-50 fixed top-0 w-full h-full duration-500`} onClick={() => setSlide(!slide)}></div>}
            <div className={`bg-red-100 fixed z-10 top-0 left-[80%] w-full h-full overflow-y-auto duration-500 ${slide ? "" : "translate-x-[100%]"}`}>
                <div>
                    <div className="inline-block py-2 px-5 mt-[10px] ml-[100px] text-[20px]">MENU</div>
                    {["シューズ", "ラーメン", "ネイル", "器具一覧", "観光地", "サプリ", "シャンプー", "豆腐", "ピアノ", "蛍光灯", "靴下", "アパレル", "マフラー", "靴下", "シューズ", "ラーメン", "ネイル", "器具一覧", "観光地", "サプリ", "シャンプー", "豆腐", "ピアノ", "蛍光灯", "靴下", "アパレル", "マフラー", "靴下"].map((k) => (
                        <div key={k} className="pl-[20px] py-[10px] border-b border-red-500 cursor-pointer"><span className="mr-[50px] text-[15px]">＜</span>{k}</div>
                    ))}
                </div>
            </div>

            <div className="change-plus inline-block ml-[40px] p-2 cursor-pointer" onClick={() => document.querySelector(".change-plus").classList.toggle("change-minus")}>
                <p className="plus-1 w-[30px] h-[2px] bg-black duration-300"></p>
                <p className="plus-2 w-[30px] h-[2px] bg-black translate-y-[-2px] rotate-[90deg]"></p>
            </div>
        </Layout>
    )
}