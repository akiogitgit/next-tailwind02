import Link from "next/dist/client/link";
import { Layout } from "../components/Layout";
import { useState } from "react";

export default function Transform() {
    const [slide, setSlide] = useState(false);
    return (
        <Layout>
            <Link href="/">home
            </Link>
            <div className="grid grid-cols-2 sm:grid-cols-3">
                <div className="text-xl ml-[30%] p-20 border-2 inline-block border-red-400
                hover:duration-1000 hover:translate-y-96">
                    translate-y-96
                </div>
                <div className="text-xl ml-[30%] p-20 border-2 inline-block border-red-400
                hover:duration-1000 hover:translate-x-96">
                    translate-x-96
                </div>
                <div className="text-xl ml-[30%] p-20 border-2 inline-block border-red-400
                hover:duration-1000 hover:scale-150">
                    scale-150
                </div>
                <div className="text-xl ml-[30%] p-20 border-2 inline-block border-red-400
                hover:duration-1000 hover:scale-0">
                    scale-0
                </div>
                <div className="text-xl ml-[30%] p-20 border-2 inline-block border-red-400
                hover:duration-1000 hover:scale-x-150">
                    scale-x-150
                </div>
                <div className="text-xl ml-[30%] p-20 border-2 inline-block border-red-400
                hover:duration-1000 hover:scale-x-0">
                    scale-x-0
                </div>
                <div className="text-xl ml-[30%] p-20 border-2 inline-block border-red-400
                hover:duration-1000 hover:scale-y-150">
                    scale-y-150
                </div>
                <div className="text-xl ml-[30%] p-20 border-2 inline-block border-red-400
                hover:duration-1000 hover:scale-y-0">
                    scale-y-0
                </div>
            </div>


            <button className="simpleBtn ml-[30%] mt-20" onClick={() => setSlide(!slide)}>button</button>

            {/*スペースはそのまま Headlineは ＠keyframeじゃないと無理*/}
            <div className={`${slide ? "block slideIn" : "slideOut"} mt-10 ml-[30%] text-xl font-bold`}>
                <Link href="">Headline headline</Link></div>

            <div className={`${slide ? "translate-x-10 visible duration-1000 opacity-100" :
                "-translate-x-32 invisible duration-1000 opacity-0"} ml-20 bg-pink-50`}>
                <Link href="/">invisible?</Link></div>
            <div className={`${slide ? "scale-y-150 visible duration-1000 opacity-100" :
                "scale-y-0 -translate-y-10 invisible duration-1000 opacity-0"} ml-20 bg-indigo-100`}>
                <Link href="/">invisible?</Link></div>
            <div className={`${slide ? "scale-y-150 visible duration-1000" :
                "scale-y-0 invisible duration-1000"} ml-20 text-4xl bg-blue-100 mt-5`}>
                <Link href="/">invisible?</Link></div>


            <div className={`${slide ? "opacity-0 duration-300" : "opacity-100 duration-300"}`}>
                <Link href="/lesson101">
                    クリックできる
                </Link>
            </div>
            <div className={`${slide ? "opacity-0 duration-300 pointer-events-none" : "opacity-100 duration-300"} text-xl`}>
                <Link href="/lesson101">
                    クリックできない
                </Link>
            </div>
            <div className="fadeSlideIn">fafafaff</div>

            {/*useState使えばいける*/}
            <Link href="">
                <div className={`${slide ? "visible h-auto p-10 opacity-100 duration-500" : "invisible h-0 p-0 opacity-0 duration-500"} cursor-pointer bg-blue-100 text-xl`}>
                    fade In</div></Link>

            <div className={`${slide ? "visible h-auto opacity-100 p-10 duration-500" :
                "h-0 opacity-0 px-10 duration-500 invisible"} bg-green-300 my-10`}>
                <Link href="">こんにちは</Link><br />
                <div>こんにちは</div><br />
                <div>こんにちは</div><br />
                <div>こんにちは</div><br />
            </div>


            {/*checkboxは、全部.cssで書かないとできない */}
            <div class="menu">
                <label for="menu_bar01">アコーディオン１</label>
                <input type="checkbox" id="menu_bar01" />
                <ul id="links01">
                    <li><a href="">Link01</a></li>
                    <li><a href="">Link02</a></li>
                    <li><a href="">Link03</a></li>
                    <li><a href="">Link04</a></li>
                </ul>
                <label for="menu_bar02">アコーディオン２</label>
                <input type="checkbox" id="menu_bar02" />
                <ul id="links02">
                    <li><a href="">Link01</a></li>
                    <li><a href="">Link02</a></li>
                    <li><a href="">Link03</a></li>
                    <li><a href="">Link04</a></li>
                </ul>
            </div>

            <input id="ac-check1" class="ac-check mt-16" type="checkbox" />
            <label class="ac-label" for="ac-check1">アコーディオン1</label>
            <div class="ac-content">
                <p>内容が入ります。</p>
            </div>
            <input id="ac-check2" class="ac-check" type="checkbox" />
            <label class="ac-label" for="ac-check2">アコーディオン2</label>
            <div class="ac-content">
                <p>内容が入ります。</p>
            </div>
        </Layout>
    )
}