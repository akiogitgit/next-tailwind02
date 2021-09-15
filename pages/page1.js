import Link from "next/dist/client/link";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi"

export default function Page1() {

    const [change, setChange] = useState(false);
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

            <div className="text-center">
                <p className="text-6xl py-10 text-white
                bg-gradient-to-r from-yellow-200 via-red-300 to-red-400">
                    Tailwind css
                </p>

                <div className="relative">
                    <img className=" w-full h-72 opacity-50" src="http://unsplash.it/500/300" />
                    <p className="absolute text-5xl top-[40%] left-[10%] sm:left-[20%] md:left-[30%] xl:left-[40%] font-black
                    bg-clip-text text-transparent bg-gradient-to-br from-green-500 via-blue-500 to-yellow-700">
                        Relative + Absolute
                    </p>
                </div>
            </div>

            <div className="xl:grid xl:grid-cols-12 bg-gray-100">
                <div className=""></div>

                <div className="col-span-8 bg-white">
                    <div className="text-center text-4xl border-b-2 border-blue-400 my-32 mx-10">
                        Tailwind cssの使い方を徹底解説！
                    </div>
                    <div className="text-center w-1/2 md:w-1/3 ml-[10%]">
                        <div className="text-2xl">目次</div>
                        <div className="text-left py-6 pl-10 border-4 rounded-xl border-yellow-400
                        space-y-8 bg-yellow-100">
                            <a href="#one" className="text-xl border-b-2 border-red-300">1.padding margin</a><br /><br />
                            <a href="#two" className="text-xl border-b-2 border-red-300">2.width height</a><br /><br />
                            <a href="#three" className="text-xl border-b-2 border-red-300">3.color</a><br /><br />
                            <a href="#four" className="text-xl border-b-2 border-red-300">4.fontSize fontFamily</a><br /><br />
                            <a href="#five" className="text-xl border-b-2 border-red-300">5.border</a><br /><br />
                            <a href="#six" className="text-xl border-b-2 border-red-300">6.flex</a><br /><br />
                            <a href="#seven" className="text-xl border-b-2 border-red-300">7.grid</a><br /><br />
                            <a href="#eight" className="text-xl border-b-2 border-red-300">8.align float</a><br /><br />
                            <a href="#nine" className="text-xl border-b-2 border-red-300">9.opacity shadow</a><br /><br />
                            <a href="#ten" className="text-xl border-b-2 border-red-300">10.position</a>
                        </div>
                    </div>

                    <div className="mt-48 mx-10">
                        <div id="one" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            1.padding margin
                        </div>
                        <div className="text-4xl my-10">p</div>
                        <div className="leading-10 text-xl">
                            <div>p は paddingであり、　p 単体は、上下左右に対応し、pt は上  pb は下  pl は左　pr は右 にそれぞれ対応しています。</div>
                            {["pl-0", "pl-0.5", "pl-1", "pl-1.5", "pl-2", "pl-2.5", "pl-3", "pl-3.5", "pl-4", "pl-5", "pl-6", "pl-8", "pl-10", "pl-12", "pl-16", "pl-20", "pl-24", "pl-28", "pl-32", "pl-36", "pl-40", "pl-44", "pl-48", "pl-52", "pl-56", "pl-64", "pl-72", "pl-80", "pl-96"].map((key) => (
                                <><div key={key} className={`${key} inline-block bg-gray-100`}>{key} </div><br /></>
                            ))}
                            <div className="mt-10">
                                ここでは pl を書きましたが、p pt pb prすべて同様に書くことが出来ます。
                            </div>
                        </div>

                        <div className="text-4xl my-10">
                            m
                        </div>
                        <div className="text-xl leading-10">
                            <div>m　は marginであり、 m単体は 上下左右、mt は上　mb は下 ml は左 mr は右に　それぞれ対応しています。　</div>
                            {["ml-0", "ml-0.5", "ml-1", "ml-1.5", "ml-2", "ml-2.5", "ml-3", "ml-3.5", "ml-4", "ml-5", "ml-6", "ml-8", "ml-10", "ml-12", "ml-16", "ml-20", "ml-24", "ml-28", "ml-32", "ml-36", "ml-40", "ml-44", "ml-48", "ml-52", "ml-56", "ml-64", "ml-72", "ml-80", "ml-96"].map((key) => (
                                <><div key={key} className={`${key} inline-block bg-gray-100`}>{key}</div><br /></>
                            ))}
                            <div className="mt-10">
                                ここでは ml を書きましたが、m mt mb mrすべて同様に書くことが出来ます。
                            </div>
                        </div>
                    </div>

                    <div className="mt-48 mx-10">
                        <div id="two" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            2.width height
                        </div>
                        <div className="leading-10 text-xl ml-10">
                            <div>w=横幅　h=高さ</div>
                            {["w-full", "w-11/12", "w-5/6", "w-4/5", "w-3/4", "w-2/3", "w-1/2", "w-1/3", "w-1/4", "w-1/5", "w-1/6", "w-1/12"].map((key) => (
                                <div key={key} className={`${key} bg-gray-100`}>{key}</div>
                            ))}<br /><br />

                            {["w-96", "w-80", "w-72", "w-64", "w-56", "w-52", "w-48", "w-44", "w-40", "w-36", "w-32", "w-28", "w-24", "w-20", "w-16", "w-12", "w-11", "w-10", "w-8", "w-6", "w-5", "w-4", "w-3.5", "w-3", "w-2.5", "w-2", "w-1.5", "w-1", "w-0.5", "w-0"].map((key) => (
                                <div key={key} className={`${key} bg-gray-100`}>{key}</div>
                            ))}<br /><br />

                            {/* {["h-full", "h-11/12", "h-5/6", "h-4/5", "h-3/4", "h-2/3", "h-1/2", "h-1/3", "h-1/4", "h-1/5", "h-1/6", "h-1/12"].map((key) => (
                                <div key={key} className={`${key} bg-gray-100`}>{key}</div>
                            ))}<br /><br /> */}

                            {["h-96", "h-80", "h-72", "h-64", "h-56", "h-52", "h-48", "h-44", "h-40", "h-36", "h-32", "h-28", "h-24", "h-20", "h-16", "h-12", "h-11", "h-10", "h-8", "h-6", "h-5", "h-4", "h-3.5", "h-3", "h-2.5", "h-2", "h-1.5", "h-1", "h-0.5", "h-0"].map((key) => (
                                <div key={key} className={`${key} border border-gray-300 bg-gray-100`}>{key}</div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-48 mx-10">
                        <div id="three" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            3.color
                        </div>
                        <div className="flex flex-wrap text-2xl font-bold bg-gray-300">
                            {["text-red-50", "text-red-100", "text-red-200", "text-red-300", "text-red-400", "text-red-500", "text-red-600", "text-red-700", "text-red-800", "text-red-900"].map((color) => (
                                <div className={`${color} ml-5 px-5`}>{color}</div>
                            ))}
                        </div>
                        <br /><br />
                        <div className="leading-10 text-xl space-x-3 flex flex-wrap">同様に、<span className="text-blue-500">blue</span>
                            <span className="text-yellow-500">yellow</span>
                            <span className="text-black">black</span>
                            <span className="text-gray-500">gray</span>
                            <span className="text-white bg-gray-300">white</span>
                            <span className="text-green-500">green</span>
                            <span className="text-indigo-500">indigo</span>
                            <span className="text-purple-500">purple</span>
                            <span className="text-pink-500">pink</span>
                            <br />の色があり、black white 以外はすべて、上記のような書き方ができできる
                            また、background-colorも同様に設定でき、
                        </div>
                        <div className="text-xl mt-3">
                            <span className="bg-gray-300">bg-gray-300</span>
                            のように書くことができます。
                        </div>

                    </div>

                    <div className="mt-48 mx-10">
                        <div id="four" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            4.fontSize fontFamily
                        </div>
                        <div className="text-4xl my-10">font Size</div>
                        <div>
                            {["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"].map((size) => (
                                <div className={`${size}`}>{size}</div>
                            ))}
                        </div>
                        <div className="text-4xl mt-20 mb-10">font Family</div>
                        <div className="mt-10 leading-10 text-3xl mt-10space-y-3 grid grid-cols-3">
                            {["font-sans", "font-serif", "font-mono", "italic", "not-italic", "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black"].map((font) => (
                                <div className={`${font}`}>{font}</div>
                            ))}
                        </div>

                    </div>

                    <div className="mt-48 mx-10">
                        <div id="five" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            5.border
                        </div>
                        <div className="leading-10 text-xl">
                            <div className="mb-10">borderには、radius、width、color、opacity、style　が設定できます。</div>
                            <div className="text-3xl mb-8">rounded(radius)</div>
                            <div className="grid grid-cols-3">
                                {["rounded-none", "rounded-sm", "rounded", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-3xl", "rounded-full"].map((radius) => (
                                    <div key={radius} className={`${radius} mt-3 ml-3 bg-gray-500 text-white h-28 pl-3 sm:pl-8 md:pl-16 pt-8`}>{radius}</div>
                                ))}
                            </div>
                            <div className="text-3xl my-10">width</div>
                            <div className="grid grid-cols-4">
                                {["border", "border-2", "border-4", "border-8", "border-t", "border-t-2", "border-t-4", "border-t-8", "border-r", "border-r-2", "border-r-4", "border-r-8", "border-b", "border-b-2", "border-b-4", "border-b-8", "border-l", "border-l-2", "border-l-4", "border-l-8"].map((width) => (
                                    <div key={width} className={`${width} border-black mt-12 ml-5`}>{width}</div>
                                ))}
                            </div>
                            <div className="text-3xl my-10">color</div>
                            <div className="grid grid-cols-3">
                                {["border-black", "border-gray-400", "border-red-400", "border-yellow-400", "border-green-400", "border-blue-400", "border-indigo-400", "border-purple-600", "border-pink-300"].map((color) => (
                                    <div key={color} className={`border-4 ml-5 mt-10 ${color}`}>{color}</div>
                                ))}
                            </div>
                            <div className="text-3xl my-10">opacity</div>
                            <div className="grid grid-cols-3">
                                {["border-opacity-100", "border-opacity-90", "border-opacity-80", "border-opacity-70", "border-opacity-60", "border-opacity-50", "border-opacity-40", "border-opacity-30", "border-opacity-25", "border-opacity-20", "border-opacity-10", "border-opacity-5", "border-opacity-0"].map((color) => (
                                    <div key={color} className={`border-4 border-black mt-8 ml-5 ${color}`}>{color}</div>
                                ))}
                            </div>
                            <div className="text-3xl my-10">style</div>
                            <div className="grid grid-cols-3">
                                {["border-solid", "border-dashed", "border-dotted", "border-double", "border-none"].map((color) => (
                                    <div key={color} className={`border-4 border-black mt-8 ml-5 ${color}`}>{color}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-48 mx-10">
                        <div id="six" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            6.flex
                        </div>
                        <div className="text-xl leading-10">
                            <div className="my-10">
                                まず、className="flex"と書きます。そうすることで、flexと書いた要素の子要素が横並びになります。
                            </div>
                            <div className="flex bg-yellow-100">
                                <p>flex 1</p><p>flex 2</p><p>flex 3</p><p>flex 4</p><p>flex 5</p><p>flex 6</p>
                            </div>
                            <div className="my-10">また、逆順も flex-row-reverse　と書くことで出来ます</div>
                            <div className="flex flex-row-reverse bg-yellow-100">
                                <p>flex 1</p><p>flex 2</p><p>flex 3</p><p>flex 4</p><p>flex 5</p><p>flex 6</p>
                            </div>
                            <div className="my-10">しかし、このままだと折り返さず横に伸び続けます。折り返すには flex に flex-wrap を加えます className="flex flex-wrap"</div>
                            <div className="flex flex-wrap grid grid-cols-4 bg-yellow-100">
                                <p>flex-wrap 1</p><p>flex-wrap 2</p><p>flex-wrap 3</p><p>flex-wrap 4</p><p>flex-wrap 5</p><p>flex-wrap 6</p>
                            </div>

                            <div className="my-10">縦に表示させるには　flex-col</div>
                            <div className="flex flex-col bg-yellow-100">
                                <div>flex-col 1</div><div>flex-col 2</div><div>flex-col 3</div>
                            </div>
                            <div className="my-10">その逆順は　flex-col-reverse</div>
                            <div className="flex flex-col-reverse bg-yellow-100">
                                <div>flex-col 1</div><div>flex-col 2</div><div>flex-col 3</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-48 mx-10">
                        <div id="seven" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            7.grid
                        </div>
                        <div className="text-xl leading-10">
                            <div className="my-10">
                                grid は flex みたいなものです
                                まず、flexと同様に className="grid"と書きます。
                                gridには colという横幅、rowという縦幅があります。
                            </div>
                            <div className="mt-20 mb-10 text-4xl">col</div>
                            <div className="mb-10">まず、例を見てもらいます。親要素に className="grid grid-cols-3"と書きます</div>
                            <div className="grid grid-cols-3">
                                {["bg-blue-300", "bg-red-300", "bg-yellow-200", "bg-gray-300", "bg-green-400", "bg-blue-300", "bg-red-300"].map((a) => (
                                    <div key={a} className={`${a}`}>grid</div>
                                ))}
                            </div>
                            <div className="my-10">そうすると、要素が横3つになる度に改行されていることがわかります。つまりそういうことです。</div>
                            <div className="my-10">また、次のように改行はさせず１列で、子要素ごとに指定した範囲を設定させることもできます。
                                この場合は、親要素に className="grid grid-cols-12"と指定し、子要素を12等分すると宣言します。<br /><br />
                                そして、一つ目の子要素に className="col-span-2"と書くことで
                                横全体が12等分されているうちの、2個分選択させることが出来ます。同様に、中央の子要素は col-span-6なので半分、右の子要素は col-span-4なので1/3を選択しています。</div>
                            <div className="grid grid-cols-12">
                                <div className="bg-pink-300 col-span-2">col-span-2</div>
                                <div className="bg-blue-300 col-span-6">col-span-6</div>
                                <div className="bg-gray-300 col-span-4">col-span-4</div>
                            </div>

                            <div className="mt-20 mb-10 text-4xl">row</div>
                            <div className="mb-10">親要素に className="grid"のみ書きます。</div>
                            <div className="grid grid-cols-3">
                                <div className="row-span-3 border-red-300 border-4">row-span-3</div>
                                <div className="border-red-300 border-4">none</div>
                                <div className="border-red-300 border-4">none</div>
                                <div className="row-span-2 border-red-300 border-4">row-span-2</div>
                                <div className="border-red-300 border-4">none</div>
                                <div className="border-red-300 border-4">none</div>
                                <div className="row-span-2 border-red-300 border-4">none</div>
                                <div className="border-red-300 border-4">none</div>
                            </div>
                            <div className="my-10">これを見ていただくと、row-span-？　と書いてある数だけ、縦に伸びていると思います。
                                記述方法は、子要素に row-span-?　でその分縦に伸びますが、その子要素の下に要素がない場合や、自分とその下の要素の数よりも、大きい数字を設定したときには、うまく表示されません。</div>
                            <div className="grid grid-cols-3">
                                <div className="border-red-300 border-4">none</div>
                                <div className="border-red-300 border-4">none</div>
                                <div className="border-red-300 border-4">none</div>
                                <div className="row-span-3 border-red-300 border-4">row-span-3</div>
                                <div className="border-red-300 border-4">none</div>
                                <div className="border-red-300 border-4">none</div>
                                <div className="row-span-2 border-red-300 border-4">row-span-2</div>
                                <div className="border-red-300 border-4">none</div>
                            </div>
                            <div className="my-10">↑ のように下の段がない場合は、一番下の段で止まってしまいます。</div>
                        </div>
                    </div>

                    <div className="mt-48 mx-10">
                        <div id="eight" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            8.align float
                        </div>
                        <div className="leading-10 my-10 text-xl">
                            <div className="text-4xl mb-20">text-center right left</div>
                            <div className="text-left">text-left</div>
                            <div className="text-center">text-center</div>
                            <div className="text-right">text-right</div>
                            <div className="text-left">
                                <div>text-left</div>
                                <div>text-left text-left text-left</div>
                                <div>text-left text-left text-left text-left text-left</div>
                            </div>
                            <div className="text-center">
                                <div>text-center</div>
                                <div>text-center text-center text-center</div>
                                <div>text-center text-center text-center text-center text-center</div>
                            </div>
                            <div className="text-right">
                                <div>text-right</div>
                                <div>text-right text-right text-right</div>
                                <div>text-right text-right text-right text-right text-right</div>
                            </div>

                            <div className="leading-10 mt-20 mb-10 text-xl">
                                <div className="text-4xl mb-10">float</div>
                                <div className="mb-16">float　を使うと半強制的に、囲った要素を移動させることが出来ます。</div>
                                <div>
                                    <div className="float-left bg-yellow-100 py-1 px-3">float-left</div>
                                    <div className="float-right bg-yellow-100 py-1 px-3">float-right</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-48 mx-10">
                        <div id="nine" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            9.opacity shadow
                        </div>
                        <div className="text-4xl my-10">opacity</div>
                        <div className="text-xl leading-10">opacityは背景も、文字も透過します。</div>
                        <div className="mt-6 mb-10 text-xl grid grid-cols-3">
                            {["opacity-100", "opacity-90", "opacity-80", "opacity-70", "opacity-60", "opacity-50", "opacity-40", "opacity-30", "opacity-25", "opacity-20", "opacity-10", "opacity-5", "opacity-0"].map((key) => (
                                <div key={key} className={`${key} font-bold`}>{key}</div>
                            ))}
                        </div>
                        <div className="my-10 text-xl grid grid-cols-3">
                            {["opacity-100", "opacity-90", "opacity-80", "opacity-70", "opacity-60", "opacity-50", "opacity-40", "opacity-30", "opacity-25", "opacity-20", "opacity-10", "opacity-5", "opacity-0"].map((key) => (
                                <div key={key} className={`${key} bg-red-400 font-bold`}>{key}</div>
                            ))}
                        </div>

                        <div className="text-xl">text-opacity は文字の色を指定したときに、文字のみ透過します。</div>
                        <div className="mt-10 mb-16 text-xl grid grid-cols-3">
                            {["text-opacity-100", "text-opacity-90", "text-opacity-80", "text-opacity-70", "text-opacity-60", "text-opacity-50", "text-opacity-40", "text-opacity-30", "text-opacity-25", "text-opacity-20", "text-opacity-10", "text-opacity-5", "text-opacity-0"].map((key) => (
                                <div key={key} className={`${key} text-black bg-red-200 font-bold`}>{key}</div>
                            ))}
                        </div>
                        <div className="text-xl">bg-opacity は背景のみを透過します。</div>
                        <div className="my-10 text-xl grid grid-cols-3">
                            {["bg-opacity-100", "bg-opacity-90", "bg-opacity-80", "bg-opacity-70", "bg-opacity-60", "bg-opacity-50", "bg-opacity-40", "bg-opacity-30", "bg-opacity-25", "bg-opacity-20", "bg-opacity-10", "bg-opacity-5", "bg-opacity-0"].map((key) => (
                                <div key={key} className={`${key} text-gray-700 bg-red-500`}>{key}</div>
                            ))}
                        </div>

                        <div className="text-4xl my-10">shadow</div>
                        <div className="grid grid-cols-3">
                            {["shadow-xs", "shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl", "shadow-inner", "shadow-outline", "drop-shadow-sm", "drop-shadow", "drop-shadow-md", "drop-shadow-lg", "drop-shadow-xl", "drop-shadow-2xl"].map((key) => (
                                <div className={`${key} ml-5 mb-8 text-gray-700 bg-pink-100`}>{key}</div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-48 mx-10">
                        <div id="ten" className="mb-10 text-4xl p-5 border-l-4 border-blue-300
                        bg-gray-50 ">
                            10.position
                        </div>
                        <div className="text-xl leading-10">
                            <div className="text-4xl my-10">fixed</div>
                            <a href="#top" className="fixed top-[93%] left-[48%] z-10
                            bg-pink-200 py-1 px-3 rounded-xl cursor-pointer">Top</a>
                            <div>fixed は画面から動かない。このページでは下にある Top が fixedを使っています。
                                記述方法は、  className="fixed top-0 left-0"  でまず表示することが出来ます。<br />
                                ここでの Top では、className="fixed top-[93%] left-[48%]"と記載しています。
                            </div>
                            <div className="text-4xl my-10">relative</div>
                            <div>relative　はそのクラスで囲った要素の位置を固定するのに使います。</div>
                            <div className="text-4xl my-10">absolute</div>
                            <div>absolute　は relative　囲った要素の中に記述することで、relativeの上に表示することができます。また、他の staticよりも上に表示されます。<br />
                                なので、 relative　＜　static　＜　absoluteの順で上に表示されます。</div>
                            <div className="text-4xl my-10">static</div>
                            <div className="mb-10">static　はrelativeの上に表示され、absoluteより下に表示されます。</div>
                            <div className="relative bg-yellow-300 w-96 h-96 pl-[160px]">
                                relative
                                <div className="static px-20 h-64 bg-pink-300 shadow-lg">
                                    <div className="absolute top-36 left-16 pl-24 w-64 h-48 bg-pink-500 shadow-xl">absolute</div>
                                    static
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-pink-300 text-white text-center mt-20 py-40">
                <div className="text-3xl font-bold">
                    &copy;footer!!!
                </div>
            </div >
        </div >
    );
}