'use client'
import Image from 'next/image'
import Link from 'next/link'



const Card = ({
    imagesrc,
    heading,
    paraInfo,
    RedirectUrl,
    key,
}) => {
    return(
        <>
        <div key={key} className="card w-full bg-base-100 shadow-custom-black">
            <figure>
                <Image
                 src={imagesrc} 
                 alt="Shoes" 
                 width={10}
                 height={10}
                 sizes="100"
                 className="w-full h-full"
                 />
                
            </figure>
                <div className="">
                <div className="card-body">
                <h2 className="card-title">{heading}</h2>
                <p>{paraInfo}</p>
                <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <Link href={RedirectUrl} className="btn btn-active btn-primary mt-4 text-white">Enroll for free</Link>
            </div>
                    
                </div>
            </div>
        </>
    )
}
export default Card