import Link from "next/dist/client/link";

export default function Transform() {
    return (
        <div>
            <Link href="/">home
            </Link>
            <div className="grid grid-cols-3">
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
        </div>
    )
}