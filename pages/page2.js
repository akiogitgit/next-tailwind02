import Link from "next/dist/client/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Page2() {

    const [change, setChange] = useState(false);
    const [change2, setChange2] = useState(false);
    return (
        <div>
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
                <div className={`${change2 ? "pl-6 py-2 border-t" : "hidden"} col-span-12  md:col-span-1 md:block md:mt-6 text-gray-300
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
    )
}