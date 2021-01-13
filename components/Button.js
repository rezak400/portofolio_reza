import Link from 'next/link'

export default function Button(props) {
    return (
        <div>
            <Link href={props.target}>
            <a target="_blank" className="bg-gray-200 py-2 px-3 rounded-full text-black flex hover:bg-white items-center font-primary text-sm mt-6 md:mt0 shadow-inner" >
                <img src={props.image} alt="" className="w-6" />
                <p className="ml-2">{props.title}</p>
            </a>    
        </Link>
        </div>
    )
}
