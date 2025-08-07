export default function Squares({value, onClick}){
    return(
        <button className="bg-white h-32 w-32 rounded-md text-4xl hover:bg-gray-300" onClick={onClick}>{value}</button>
    )
}