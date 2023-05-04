import Details from "./Details";
import data from "../data";
import { Avatar } from "@material-tailwind/react";

export default function Card() {
    return (
        <div className="relative flex flex-col items-center bg-white rounded-xl shadow-2xl overflow-hidden my-10 mx-6">
           
           
            <div className="w-full divide-y divide-[#969696]/25">
                <div className="flex flex-col items-center py-6">
                    <div className="flex flex-row items-center space-x-2">
                        <h1 className="font-kumbh font-bold text-lg text-[#2d3248]">Gabriel Nkwa</h1>
                        <span className="font-kumbh font-normal text-[#6a6f81]"></span>
                    </div>
                    <span className="font-kumbh font-normal text-sm text-[#6a6f81] mt-1">Karmo, Abuja</span>
                    <span className="font-kumbh font-normal text-sm text-[#6a6f81] mt-1">+2348131539964</span>
                </div>
                <div className="flex flex-row justify-center space-x-12 py-6">
                    {data.map((item, index) => (
                        <Details
                            key={index}
                            value={item.value}
                            category={item.key}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
