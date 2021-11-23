import Link from "next/dist/client/link";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi"

export const Header = () => {
    const [change, setChange] = useState(false);
    const [popUp, setPopUp] = useState(false);
    return (
        <div id="top" className="bg-red-500 text-white grid grid-cols-12">
            <div className="text-red-200 text-4xl font-bold ml-4 pt-3 pb-5
            hover:text-white hover:cursor-pointer hover:duration-300 hover:-translate-y-1">
                <Link href="/">home</Link>
            </div>

            <div className="block md:hidden col-end-12 text-3xl mt-5 text-red-200
            hover:cursor-pointer hover:text-white hover:duration-300
            active:duration-300 active:translate-y-1.5 "
                onClick={() => setChange(!change)}>
                <GiHamburgerMenu />
            </div>

            <Link href="/page1">
                <div className={`${change ? "visible opacity-100 pl-6 py-2 border-t duration-500" : "duration-500 opacity-0 h-0 invisible"}
            col-span-12 md:col-span-1 md:col-end-5 md:block md:mt-6 md:border-none md:visible md:opacity-100 text-red-100 hover:bg-red-400 md:hover:bg-opacity-0
                hover:text-black md:hover:text-white hover:cursor-pointer hover:duration-300 md:hover:-translate-y-1`}>
                    page1
                </div></Link>

            <Link href="/page2">
                <div className={`${change ? "visible opacity-100 pl-6 py-2 border-t duration-500" : "duration-500 opacity-0 h-0 invisible"}
            col-span-12 md:col-span-1 md:block md:mt-6 md:border-none md:visible md:opacity-100 text-red-100 hover:bg-red-400 md:hover:bg-opacity-0
                hover:text-black md:hover:text-white hover:cursor-pointer hover:duration-300 md:hover:-translate-y-1`}>
                    page2
                </div></Link>

            <Link href="/transform">
                <div className={`${change ? "visible opacity-100 pl-6 py-2 border-t duration-500" : "duration-500 opacity-0 h-0 invisible"}
            col-span-12 md:col-span-1 md:block md:mt-6 md:border-none md:visible md:opacity-100 text-red-100 hover:bg-red-400 md:hover:bg-opacity-0
                hover:text-black md:hover:text-white hover:cursor-pointer hover:duration-300 md:hover:-translate-y-1`}>
                    page3
                </div></Link>

            <Link href="/CAR">
                <div className={`${change ? "visible opacity-100 pl-6 py-2 border-t duration-500" : "duration-500 opacity-0 h-0 invisible"}
            col-span-12 md:col-span-1 md:block md:mt-6 md:border-none md:visible md:opacity-100 text-red-100 hover:bg-red-400 md:hover:bg-opacity-0
                hover:text-black md:hover:text-white hover:cursor-pointer hover:duration-300 md:hover:-translate-y-1`}>
                    page4
                </div></Link>

            <div className={`${change ? "visible opacity-100 pl-6 py-2 border-t duration-500" : "duration-500 opacity-0 h-0 invisible"}
            col-span-12 md:col-span-1 md:col-end-11 md:opacity-100 md:visible md:h-auto md:bg-red-400 md:py-6 md:pl-4 lg:w-0 lg:pr-14
                hover:bg-red-300 hover:text-black hover:duration-300 hover:cursor-pointer`}
                onClick={() => setPopUp(true)}>
                Login
            </div>


            {popUp ? (
                <div className="duration-1000 shadow-xl z-20 fixed top-[40%] left-[10%] sm:left-[20%] lg:left-[30%] xl:left-[35%] w-[400px] md:w-[600px] h-96
            border-4 border-red-300 rounded-2xl bg-red-100">
                    <form className="text-center flex flex-col">
                        <div className="text-xl text-gray-400 my-5">email</div>
                        <input className="mb-5 mx-10 bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-300" id="inline-password" type="email" placeholder="emailを入力してください" />
                        <div className="text-xl text-gray-400 mb-5">password</div>
                        <input className="mx-10 bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-300" id="inline-password" type="password" placeholder="passwordを入力してください" />
                        <button className="mx-20 duration-500 ease-in-out text-white text-xl font-bold text-center m-10 p-3 rounded-md transition bg-red-400
                    hover:bg-red-500 transform hover:-translate-y-5 hover:scale-125"
                            onClick={() => setPopUp(false)}>
                            Login
                        </button>
                    </form>
                </div>
            ) : (<div className="duration-1000 scale-0 opacity-0 -translate-y-96 fixed"></div>)}

        </div>
    )
}