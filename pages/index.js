import Head from 'next/head'
import Link from "next/link";
import { Component } from '../components/component';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      < Head >
        <title>Tailwind css</title>
        <link rel="icon" href="/favicon.ico" />
      </Head >
      <div>
        <ul className="mt-20 ml-4">
          <li>
            <Link href="/page1">・page1</Link>
          </li>
          <li>
            <Link href="/page2">・page2</Link>
          </li>
          <li>
            <Link href="/transform">・transform</Link>
          </li>
        </ul>

        <div className="bg-gray-400 text-yellow-100 py-8 shodow-xl">
          <h1 className="ml-10 text-3xl font-seli
          hover:text-black hover:bg-blue-200
          active:ml-4 active:bg-white active:text-2xl">
            this is header
          </h1>

          <div className="flex sm:flex-col md:flex-row-reverse 
          lg:flex-col-reverse xl:hidden ml-8">
            <div className="ml-4">menu1</div>
            <div className="ml-4">menu2</div>
            <div className=" ml-4">menu3</div>
          </div>
        </div>

        <div class="relative group bg-red-100 py-5">
          <div>
            Menu
          </div>
          <div class="absolute hidden group-hover:block bg-green-100">
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
          </div>
        </div>

        {/* 結構使えそう */}
        <div className="sm:flex">
          <div className="relative group w-full bg-red-300">
            <div className="p-3 text-center">
              Menu
            </div>
            <div class="absolute hidden group-hover:block bg-green-100 w-full text-center">
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
            </div>
          </div>
          <div className="relative group w-full bg-red-500">
            <div className="p-3 text-center">
              Menu
            </div>
            <div class="absolute hidden group-hover:block bg-green-100 w-full text-center">
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
            </div>
          </div>
          <div className="relative group w-full bg-red-700">
            <div className="p-3 text-center">
              Menu
            </div>
            <div class="absolute hidden group-hover:block bg-green-100 w-full text-center">
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
            </div>
          </div>
        </div>



        {/* grid は親で grid-cols-3だと子要素を3等分するってことになる
        この時はみ出ると、flex-wrapする */}
        <div className="grid grid-cols-4">
          {[...Array(6)].map((key) => (
            <div key={key} className=" bg-indigo-300 rounded-md p-3 m-1">
              <div className="text-center">grid</div>
            </div>
          ))}
        </div>

        {/* col-span row-span */}
        <div className="grid grid-cols-3">
          {["", "col-span-3", "", "col-span-2", "", "row-span-2", ""].map((key) => (
            <div key={key} className={`bg-red-200 rounded-md p-3 m-1 ${key}`}>
              <div className="text-center">{key}</div>
            </div>
          ))}
        </div>

        {/* col-start-1 は1のとこで書く col-start-4 は3のとこで書く */}
        <div className="grid grid-cols-5">
          {["col-start-1", "", "col-end-4", "col-start-2", "", "", "", "col-start-4", "", "col-start-2", "col-end-4"].map((key) => (
            <div key={key} className={`bg-blue-300 rounded-md p-3 m-1 ${key}`}>
              <div className="text-center">{key}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap">
          {[...Array(8)].map((key) => (
            <div key={key} className="bg-blue-200 rounded-md py-1 px-20 m-1">
              <div className="text-center">flex</div>
            </div>
          ))}
        </div>
        <Component />
        <div className="
        ml-[200px] bg-purple-300 w-[40%]
        border-[10px] border-red-600">
          anpan!!!aa
        </div>
        <div className="py-[20px] bg-red-200">wowo</div>
      </div>
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS 🐼</h1>
        <p className="text-center text-teal-500 text-2xl py-4">This is an Example.</p>
      </div>

      {/* 激やばボタン duration easeでゆっくりに */}
      <button class="duration-500 ease-in-out text-white font-bold text-center m-10 p-3 rounded-md transition bg-blue-600
      hover:bg-red-600 transform hover:-translate-y-5 hover:scale-150 ...">
        Hover me
      </button>

      <button className="btn2">btn</button>


    </Layout>
  )
}
