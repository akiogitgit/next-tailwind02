import Link from "next/dist/client/link"
import { AiOutlineSearch, AiFillCaretRight } from "react-icons/ai";
import { FaMouse } from "react-icons/fa";
import { BsArrow90DegLeft, BsArrowReturnRight } from "react-icons/bs";
import { GiArrowDunk } from "react-icons/gi";

export default function Page2() {
    return (
        <div className="m-auto overflow-hidden">
            <div className="bg-white h-[80px] flex">
                <div className="relative text-[40px] ml-[50px] mr-[4px] scale-x-125 translate-y-2">
                    ○
                    <div className="absolute top-[10%] left-[30%] text-[32px] font-bold scale-y-90 scale-x-125">
                        Z</div>
                </div>
                <div className="font-bold text-[40px] scale-y-[70%] translate-y-[6px]"><Link href="/">
                    ZAXUS</Link></div>
                <div className="ml-[337px] text-[14px] mt-[27px] font-medium scale-x-[68%] underline italic" style={{ textDecorationColor: "rgba(121,121,121,0.3)" }}>
                    LINE UP</div>
                <div className="mt-[27px] text-[14px] ml-3 font-bold scale-x-[68%] underline italic" style={{ textDecorationColor: "rgba(121,121,121,0.3)" }}>
                    BRAND</div>
                <div className="mt-[27px] text-[14px] ml-2 font-bold scale-x-[67%] underline italic" style={{ textDecorationColor: "rgba(121,121,121,0.3)" }}>
                    MAGAZINE</div>
                <div className="font-semibold text-[10px] mt-[27px] ml-10 scale-y-90 italic">テクノロジー</div>
                <div className="font-bold text-[10px] mt-[27px] ml-[17px] scale-y-90 italic">サービス</div>
                <div className="font-bold text-[10px] mt-[27px] ml-3 scale-y-90 scale-x-90 italic">ご購入検討サポート</div>
                <div className="font-bold text-[10px] mt-[27px] ml-[9px] scale-y-90 scale-x-90 italic">販売店</div>
                <div className="mt-[27px] ml-8 relative w-6 h-6 rounded-full bg-gray-200">
                    <div className="absolute bottom-[13%] right-[14%] text-[16px] mt-7 ml-5">
                        <AiOutlineSearch />
                    </div>
                </div>
                <button className="ml-6">
                    <p className="bg-black w-[30px] h-[1px] mb-[5px] translate-x-[8px]"></p>
                    <p className="bg-black w-[30px] h-[1px] mb-[5px] translate-x-[4px]"></p>
                    <p className="bg-black w-[30px] h-[1px]"></p>
                </button>
            </div>
            <div className="relative">
                <img className="w-full h-[456px]" src="/car.jpg" />
                <div className="absolute text-white text-[140px] top-[10%] left-[5%] font-thin">
                    AX</div>
                <div className="absolute text-white text-[14px] top-[48%] left-[6%]">
                    AX450h<span className="mx-[8px]">/</span>AX200I</div>
                <div className="absolute text-white text-[23px] top-[57%] left-[5%] leading-9 font-serif">
                    ドラマチックな美しさ<br />高い実用性と効率性を兼ね備えた<br />パフォーマンスSUV</div>
            </div>


            <div>
                {/*　linear-gradient は、三角形を出す位置 transparent 50% は、0だとなし、50だと三角、100だと、長方形になる　その横は 0,100%だと、グラデーション　50%だと普通 no-repeat top right は、上と右にくっつく /横の比率 縦の比率 */}
                <div style={{ width: "100%", height: "630px", background: "linear-gradient(to right bottom, transparent 50% , rgb(225,225,225) 50%) no-repeat top right / 30% 100%" }}>
                    <div className="pb-[20px] border-b">
                        <div className="flex ml-[850px] mb-[50px]">
                            <div className="relative bg-gray-200 w-[45px] h-[30px] inline-block skew-x-[-25deg]">
                                <div className="text-[10px] text-gray-700 absolute top-[24%] left-[25%] skew-x-[25deg]">
                                    概要</div>
                            </div>
                            <div className="bg-gray-600 w-[73px] h-[30px] inline-block skew-x-[-25deg] ml-[1px]">
                                <div className="text-[8px] text-gray-300 tracking-widest absolute top-[23%] left-[22%] scale-x-[135%] skew-x-[25deg]">
                                    ギャラリー</div>
                            </div>
                            <div className="bg-gray-600 w-[45px] h-[30px] inline-block skew-x-[-25deg] ml-[1px]">
                                <div className="text-[10px] text-gray-300 absolute top-[23%] left-[25%] skew-x-[25deg]">
                                    特徴</div>
                            </div>
                            <div className="bg-gray-600 w-[76px] h-[30px] inline-block skew-x-[-25deg] ml-[1px]">
                                <div className="text-[8px] text-gray-300 tracking-widest absolute top-[23%] left-[17%] skew-x-[25deg]">
                                    仕様・価格</div>
                            </div>
                        </div>

                        <div className="ml-[140px] w-[290px] h-[120px] inline-block skew-x-[-25deg] overflow-hidden">
                            <div className="skew-x-[25deg] -translate-y-4 scale-x-125 scale-[110%]">
                                <img src="/women.jpg" />
                            </div>
                        </div>
                        <div className="ml-[10px] w-[290px] h-[120px] inline-block skew-x-[-25deg] overflow-hidden">
                            <div className="relative skew-x-[25deg] w-[600px] -translate-x-80 -translate-y-64">
                                <img src="https://source.unsplash.com/rafblRbne3o" />
                                <div className="text-white absolute top-[75%] left-[63%] scale-y-90 w-10 h-10 bg-gray-400 rounded-full opacity-70"></div>
                                <div className="text-white absolute top-[76%] left-[64%] text-[30px] scale-y-90 opacity-80"><AiFillCaretRight /></div>
                            </div>
                        </div>
                        <div className="ml-[10px] w-[290px] h-[120px] inline-block skew-x-[-25deg] overflow-hidden">
                            <div className="skew-x-[25deg] translate-x-4 -translate-y-24 scale-[175%] grayscale">
                                <img style={{ transform: "scale(-1,1)" }} src="https://source.unsplash.com/G0j6mtBse_8" />
                            </div>
                        </div>

                        <div className="flex tracking-widest">
                            <div className="ml-[230px] mt-2 font-semibold leading-4 text-[10px] text-gray-600">
                                予防安全パッケージ<br />
                                <div className="font-black -translate-x-2">
                                    SAFETY  SYSTEM +</div></div>
                            <div className="ml-[160px] mt-2 font-semibold leading-4 text-[10px] scale-x-[110%] text-gray-600">
                                ザクサスのスペシャル動画<br />
                                <div className="font-black ml-[15px]">
                                    SPECISL MOVIE</div></div>
                            <div className="ml-[200px] mt-2 font-semibold leading-4 text-[10px] text-gray-600">
                                顧客満足度調査<br />
                                <div className="font-black -translate-x-16">
                                    CUSTOMER SATISFACTION SURVEY</div></div>
                        </div>
                    </div>

                    <div className="mt-[20px]">
                        <div className="flex ml-[50px]">
                            <div className="text-[55px] font-bold tracking-wider italic scale-x-75">
                                360°VIEW
                            </div>
                            <div className="relative ml-[100px] w-10 h-10 mt-[20px]">
                                <div className="text-[20px] absolute top-[2%] left-[44%] text-gray-600"><BsArrow90DegLeft /></div>
                                <div className="text-[20px] absolute top-[35%] left-[30%] text-gray-600"><FaMouse /></div>
                                <div className="text-[20px] absolute top-[72%] left-[20%] text-gray-600"><BsArrowReturnRight /></div>
                            </div>
                            <div className="mt-[30px] ml-1 text-gray-600 scale-y-75">ドラッグし360°レビューをご覧いただけます</div>
                        </div>

                        <div className="flex">
                            <div className="ml-[300px] mt-[40px] w-[500px] h-[130px] inline-block overflow-hidden">
                                <div className="scale-x-[110%] translate-x-[-10px] translate-y-[-104px]">
                                    <img src="https://source.unsplash.com/keRubFoQix8" /></div>
                            </div>
                            <div className="-translate-y-12 ml-[120px] text-gray-600 text-[12px] tracking-widest">
                                <div className="ml-[140px] mb-3 text-gray-800 font-bold text-[14px] scale-x-[110%] scale-y-90">モデルを選ぶ</div>
                                <div className="ml-[120px] mb-1">RX250h "version L" 2WD<br />7.025.000円</div>
                                <div className="ml-[100px] mb-1">RX250h "version L" AWD<br />7.285.000円</div>
                                <div className="ml-[80px] mb-1">RX250h "F SPORT" 2WD<br />7.165.000円</div>
                                <div className="ml-[50px] mb-1">RX250h "F SPORT" 2WD<br />7.425.000円</div>
                                <div className="ml-[30px]">RX250h 2WD<br />6.025.000円</div>
                                <div className="ml-[140px] text-[12px] mt-[15px] text-gray-600 inline-block rotate-[90deg] scale-y-[250%]">＞</div>
                            </div>
                        </div>

                        <div className="flex ml-[377px] -translate-y-16">
                            <div className="text-[12px] tracking-widest">色を選ぶ</div>
                            <div className="ml-[20px] w-[24px] h-[24px] bg-gray-100 border border-gray-300 rounded-full"></div>
                            <div className="ml-[20px] w-[24px] h-[24px] bg-gray-200 border border-gray-300 rounded-full"></div>
                            <div className="ml-[20px] w-[24px] h-[24px] bg-gray-300  border border-gray-300 rounded-full"></div>
                            <div className="ml-[20px] w-[24px] h-[24px] bg-gray-700 opacity-80 border border-gray-300 rounded-full"></div>
                            <div className="ml-[20px] w-[24px] h-[24px] bg-red-700 opacity-80 border border-gray-300 rounded-full"></div>
                            <div className="ml-[20px] w-[24px] h-[24px] bg-blue-800 opacity-80 border border-gray-300 rounded-full"></div>
                            <div className="ml-[20px] w-[24px] h-[24px] bg-blue-900 opacity-80 border border-gray-300 rounded-full"></div>
                        </div>
                        <div className="ml-[540px] text-[10px] -translate-y-16">▲</div>
                    </div>
                </div>


                <div className="relative bg-black overflow-hidden">
                    <div className="w-full h-full bg-gray-50 absolute z-10 opacity-20 "></div>
                    <div className="h-[370px] ml-[50px] -translate-y-32 scale-[60%]">
                        <img src="https://source.unsplash.com/Yb0fzqv5nQw" />
                    </div>
                    <div className="absolute top-[67%] left-[2%] font-bold italic text-[70px] scale-x-[60%] opacity-50 text-white">
                        GALLERY</div>
                    <div className="absolute top-[43%] left-[28%] text-[40px] scale-y-75 text-blue-400">
                        <AiFillCaretRight /></div>
                    <div className="absolute top-[33%] left-[49%] text-[50px] text-blue-400">54</div>
                    <div className="absolute top-[58%] left-[65%] text-[14px] text-blue-400">Since 12:32</div>
                    <div className="absolute top-[63%] left-[65%] text-[15px] text-blue-300">
                        Ride time<span className="ml-[20px]">1:05h</span><br />Distance<span className="ml-[23px]">20.4km</span><br />Consumpt。  9.01/1000km<br />Speed 　 。<span className="ml-[10px]">21km/h</span>
                    </div>
                    <div className="absolute top-[87%] left-[68%] leading-4 text-[14px] text-blue-200">
                        14:00<br />13.0</div>
                    <div className="absolute top-[30%] left-[97%] text-[10px] text-blue-200 opacity-80 leading-6">
                        81 ●<br />82 ●<br />83 ●<br />84 ●<br />85 ●<br />86 ●<br />87 ●<br />88 ●<br />89 ●<br /></div>
                </div>

                <div>
                    <div className="ml-[35%] mt-[40px] mb-[30px] text-[50px] scale-x-[60%] italic font-bold">LINE UP</div>
                    <div className="flex">
                        <div className="ml-[80px] w-[250px] h-[280px] border-l border-r border-gray-300">
                            <div className="text-center text-[20px] font-bold scale-x-75">AX450h</div>
                            <div className="mt-[40px] ml-[15px] w-[220px] h-[70px] inline-block overflow-hidden">
                                <div className="scale-[125%] -translate-y-10">
                                    <img src="https://source.unsplash.com/keRubFoQix8" /></div>
                            </div>
                            <div className="text-[10px] font-bold ml-[20px] mt-[30px]">価格<span className="ml-6">4,025,000円~</span></div>
                            <div className="text-[10px] font-bold ml-[20px] mt-[1px]">燃費<span className="ml-6">18.2km/L</span></div>
                            <div className="text-[10px] font-bold ml-[20px] mt-[1px]">サイズ<span className="ml-6">L4.890 / W 1.895 / H 1.610(mm)</span></div>
                            <div className="text-[10px] font-bold ml-[20px] mt-[15px]">V型6気筒3.5エンジン - ハイブリッドシステム<br />電気指揮無段変速機</div>
                        </div>
                        <div className="ml-[15px] w-[250px] h-[280px] border-r border-gray-300">
                            <div className="text-center text-[20px] font-bold scale-x-75">AX450h</div>
                            <div className="mt-[40px] ml-[10px] w-[220px] h-[70px] inline-block overflow-hidden">
                                <div className="scale-[125%] -translate-y-10">
                                    <img src="https://source.unsplash.com/keRubFoQix8" /></div>
                            </div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[30px]">価格<span className="ml-6">4,025,000円~</span></div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[1px]">燃費<span className="ml-6">18.2km/L</span></div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[1px]">サイズ<span className="ml-6">L4.890 / W 1.895 / H 1.610(mm)</span></div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[15px]">V型6気筒3.5エンジン - ハイブリッドシステム<br />電気指揮無段変速機</div>
                        </div>
                        <div className="ml-[15px] w-[250px] h-[280px] border-r border-gray-300">
                            <div className="text-center text-[20px] font-bold scale-x-75">AX450h</div>
                            <div className="mt-[40px] ml-[10px] w-[220px] h-[70px] inline-block overflow-hidden">
                                <div className="scale-[125%] -translate-y-10">
                                    <img src="https://source.unsplash.com/keRubFoQix8" /></div>
                            </div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[30px]">価格<span className="ml-6">4,025,000円~</span></div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[1px]">燃費<span className="ml-6">18.2km/L</span></div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[1px]">サイズ<span className="ml-6">L4.890 / W 1.895 / H 1.610(mm)</span></div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[15px]">V型6気筒3.5エンジン - ハイブリッドシステム<br />電気指揮無段変速機</div>
                        </div>
                        <div className="ml-[15px] w-[250px] h-[280px] border-r border-gray-300">
                            <div className="text-center text-[20px] font-bold scale-x-75">AX450h</div>
                            <div className="mt-[40px] ml-[10px] w-[220px] h-[70px] inline-block overflow-hidden">
                                <div className="scale-[125%] -translate-y-10">
                                    <img src="https://source.unsplash.com/keRubFoQix8" /></div>
                            </div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[30px]">価格<span className="ml-6">4,025,000円~</span></div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[1px]">燃費<span className="ml-6">18.2km/L</span></div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[1px]">サイズ<span className="ml-6">L4.890 / W 1.895 / H 1.610(mm)</span></div>
                            <div className="text-[10px] font-bold ml-[10px] mt-[15px]">V型6気筒3.5エンジン - ハイブリッドシステム<br />電気指揮無段変速機</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="text-gray-300 text-[10px] bg-gray-800 w-full h-[170px] mt-[50px] tracking-widest">
                <div className="flex justify-center pt-[18px] space-x-[50px]">
                    <div className="scale-y-125">LINE UP</div>
                    <div className="scale-y-125">BRAND</div>
                    <div className="scale-y-125">TECHNOLOGY</div>
                    <div className="scale-y-95">お知らせ</div>
                    <div className="scale-y-90 scale-x-[140%]">サービス</div>
                    <div className="scale-y-90 scale-x-[110%]">ご購入検討サポート</div>
                    <div>販売店</div>
                </div>

                <div className="flex justify-center mt-[30px] space-x-[40px] scale-y-90">
                    <div className="scale-x-125">lexus.jp (EN)</div>
                    <div className="scale-x-125">プライバシーポリシー</div>
                    <div>ご利用に関して</div>
                    <div>お問い合わせ</div>
                </div>

                <div className="text-center mt-[60px] tracking-widest scale-x-125">・ 2017 LEXUS</div>
            </div>
        </div >
    )
}


//<div className="triangle" style={{ width: "100%", height: "1000px", background: "linear-gradient(to right bottom, transparent 50% , rgb(225,225,225) 50%) no-repeat top right / 30% 100%" }}></div>
