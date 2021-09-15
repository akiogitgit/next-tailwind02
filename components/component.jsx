// import 'tailwindcss/tailwind.css'
// import "../pages/styles.css"
// このimport は_appでするだけでどのファイルでも使える

export const Component = () => {
    return (
        <div>
            <h1 className="text-xl bg-red-200 p-5 text-center">Component!!!!</h1>
            <div className="text-white bg-black">aaa</div>
            <div className="m-20">nanana</div>
            <p className="m-20 bg-purple-500 ">p tag death</p>
            <div className="hero">
                <h1 className="title">Next.js + Tailwind CSS 🐼</h1>
                <p className="text-center text-teal-500 text-2xl py-4">This is an Example.</p>
            </div>

            <h1 className="text-xl bg-red-200 p-5 text-center">Component!!!!</h1>
        </div>
    )
}
