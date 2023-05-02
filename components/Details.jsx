export default function Details(props) {
    return (
        <div className="flex flex-col items-center">
            <h2 className="font-kumbh font-bold text-lg text-[#2d3248]">{props.value}</h2>
            <span className="font-kumbh font-normal text-xs tracking-widest text-[#6a6f81] mt-1">{props.category}</span>
        </div>
    );
}