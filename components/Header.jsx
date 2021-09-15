import Link from "next/dist/client/link";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi"

export const Header = () => {
    const [change, setChange] = useState(false);
    return (
        <div id="top" className="bg-gray-500 text-white grid grid-cols-12">
            <div className="text-gray-300 text-4xl font-bold ml-4 pt-3 pb-5
            hover:text-white hover:cursor-pointer hover:duration-300 hover:-translate-y-1">
                <Link href="/">home</Link>
            </div>
            <div className="block md:hidden col-end-11 text-3xl mt-5 text-gray-300
            hover:cursor-pointer hover:text-white hover:duration-300
            active:duration-300 active:translate-y-1.5 "
                onClick={() => setChange(!change)}>
                <GiHamburgerMenu />
            </div>
            <div className={`${change ? "pl-6 py-2 border-t" : "hidden"} col-span-12 md:col-span-1 md:col-end-5 md:block md:mt-6 md:border-none text-gray-300
                hover:text-white hover:cursor-pointer hover:duration-300 hover:-translate-y-1`}>
                <Link href="/page1">page1</Link>
            </div>
            <div className={`${change ? "pl-6 py-2 border-t" : "hidden"} col-span-12 md:col-span-1 md:block md:mt-6 md:border-none text-gray-300
                hover:text-white hover:cursor-pointer hover:duration-300 hover:-translate-y-1`}>
                <Link href="/page2">page2</Link>
            </div>
            <div className={`${change ? "pl-6 py-2 border-t" : "hidden"} col-span-12 md:col-span-1 md:block md:mt-6 md:border-none text-gray-300
                hover:text-white hover:cursor-pointer hover:duration-300 hover:-translate-y-1`}>
                <Link href="/transform">page3</Link>
            </div>
            <div className="hidden md:block col-end-11 bg-gray-400 py-6 pl-4 lg:w-0 lg:pr-14
                hover:bg-gray-300 hover:text-black hover:duration-300 hover:cursor-pointer">Login</div>
        </div>
    )
}