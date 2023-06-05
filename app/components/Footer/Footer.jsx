import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import {IoMdCall} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {BsClock} from 'react-icons/bs'
import Image from 'next/image';
import MiniFooter from './MiniFooter';


const Footer = () => {


    const iconColors = '#edd155'

    const container1 = [
            {heading:'USA(TEXAS)'},
            {placeholder:'+1 (908) 878-3691', icon:IoMdCall , href:'/'},
            {placeholder:'sai.kotla@dignityofnoble.org', icon:MdEmail , href:'/'},
            {placeholder:'13686 Gabriel DR, Frisco, TX 75035', icon:HiLocationMarker , href:'/'},
            {placeholder:'Mon – Fri: 10am – 6pm CST', icon:BsClock , href:'/'},
    ]

    const container2 = [
            {heading:'UK'},
            {placeholder:'+44 7986 991640', icon:IoMdCall , href:'/'},
            {placeholder:'sai.kotla@dignityofnoble.org', icon:MdEmail , href:'/'},
            {placeholder:'71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, England', icon:HiLocationMarker , href:'/'},
            {placeholder:'Mon – Fri: 10am – 6pm', icon:BsClock , href:'/'},
    ]

    const container3 = [
        {heading:'INDIA'},
        {placeholder:'+91 9866614909', icon:IoMdCall , href:'/'},
        {placeholder:'sai.kotla@dignityofnoble.org', icon:MdEmail , href:'/'},
        {placeholder:'Flat 313, Vijaya Towers, Kamma Sangham Lane, Ameerpet, Hyderabad – 500038', icon:HiLocationMarker , href:'/'},
        {placeholder:'Mon – Fri: 10am – 6pm CST', icon:BsClock , href:'/'},
    ]
    
    const container4 = [
        {heading:'USA(CALIFORNIA)'},
        {placeholder:'+1 (908) 878-3691', icon:IoMdCall , href:'/'},
        {placeholder:'sai.kotla@dignityofnoble.org', icon:MdEmail , href:'/'},
        {placeholder:'6420 Stoneridge Mall Rd, Pleasanton, CA 94588, United States', icon:HiLocationMarker , href:'/'},
        {placeholder:'Mon – Fri: 10am – 6pm CST', icon:BsClock , href:'/'},
    ]


    return (
       <footer
        className="
            mt-6
            overflow-hidden
        "
       >
            <Container>
                
                <div
                 className="
                    grid
                    grid-cols-1
                    justify-center
                    items-center
                    lg:grid-cols-5
                    gap-4
                    w-full
                    h-full
                ">

                    {/* LOGO IMAGE */}
                    <div 
                     className="
                        w-full
                        h-full
                        flex
                        items-center
                        justify-center
                    ">
                        <Image
                            alt='company logo'
                            src='/logo.jpg'
                            className='
                                w-[10rem]
                                h-[10rem]
                            '
                            width={10}
                            height={10}
                            sizes='100'
                        />
                    </div>

                    {/* USA TEXAS */}
                    <div 
                        className="
                         flex
                         flex-col
                         gap-3
                         justify-center
                         items-center
                         lg:justify-normal
                         lg:items-start
                    ">
                        {container1?.map((elem,index) => {
                            if (elem?.heading) {
                                return(
                                    <span 
                                     key={index}
                                     className="
                                        text-lg
                                        font-bold
                                        mb-3
                                    ">
                                        {elem?.heading}
                                    </span>
                                )
                            }else{
                                return(
                                    <div 
                                        key={index + 23}
                                        className="
                                            flex
                                            flex-col
                                            gap-2
                                            justify-center
                                    ">
                                        <Link
                                            href={elem?.href}
                                            className="
                                                flex
                                                flex-row
                                                gap-2
                                            "
                                        >
                                            {<>
                                                <elem.icon
                                                    width={25}
                                                    height={25}
                                                    color={iconColors}
                                                />    
                                                <span 
                                                 className="
                                                   text-xs 
                                                   text-black
                                                ">
                                                    {elem?.placeholder}
                                                </span>                                        
                                            </>}
                                        </Link>
                                    </div>
                                )
                            }
                           
                            }
                        )}
                    </div>

                    {/* UK */}
                    <div 
                        className="
                        flex
                         flex-col
                         gap-3
                         justify-center
                         items-center
                         lg:justify-normal
                         lg:items-start
                    ">
                        {container2?.map((elem,index) => {
                            if (elem?.heading) {
                                return(
                                    <span 
                                     key={index}
                                     className="
                                        text-lg
                                        font-bold
                                        mb-3
                                    ">
                                        {elem?.heading}
                                    </span>
                                )
                            }else{
                                return(
                                    <div 
                                        key={index + 23}
                                        className="
                                            flex
                                            flex-col
                                            gap-2
                                            justify-center
                                    ">
                                        <Link
                                            href={elem?.href}
                                            className="
                                                flex
                                                flex-row
                                                gap-2
                                            "
                                        >
                                            {<>
                                                <elem.icon
                                                    width={25}
                                                    height={25}
                                                    color={iconColors}
                                                />    
                                                <span 
                                                 className="
                                                   text-xs 
                                                   text-black
                                                ">
                                                    {elem?.placeholder}
                                                </span>                                        
                                            </>}
                                        </Link>
                                    </div>
                                )
                            }
                           
                            }
                        )}
                    </div>

                    {/* INDIA */}
                    <div 
                        className="
                        flex
                        flex-col
                        gap-3
                        justify-center
                        items-center
                        lg:justify-normal
                        lg:items-start
                    ">
                        {container3?.map((elem,index) => {
                            if (elem?.heading) {
                                return(
                                    <span 
                                     key={index}
                                     className="
                                        text-lg
                                        font-bold
                                        mb-3
                                    ">
                                        {elem?.heading}
                                    </span>
                                )
                            }else{
                                return(
                                    <div 
                                        key={index + 23}
                                        className="
                                            flex
                                            flex-col
                                            gap-2
                                            justify-center
                                    ">
                                        <Link
                                            href={elem?.href}
                                            className="
                                                flex
                                                flex-row
                                                gap-2
                                            "
                                        >
                                            {<>
                                                <elem.icon
                                                    width={25}
                                                    height={25}
                                                    color={iconColors}
                                                />    
                                                <span 
                                                 className="
                                                   text-xs 
                                                   text-black
                                                ">
                                                    {elem?.placeholder}
                                                </span>                                        
                                            </>}
                                        </Link>
                                    </div>
                                )
                            }
                           
                            }
                        )}
                    </div>

                    {/* USA CALIFORNIA */}
                    <div 
                        className="
                        flex
                         flex-col
                         gap-3
                         justify-center
                         items-center
                         lg:justify-normal
                         lg:items-start
                    ">
                        {container4?.map((elem,index) => {
                            if (elem?.heading) {
                                return(
                                    <span 
                                     key={index}
                                     className="
                                        text-lg
                                        font-bold
                                        mb-3
                                    ">
                                        {elem?.heading}
                                    </span>
                                )
                            }else{
                                return(
                                    <div 
                                        key={index + 23}
                                        className="
                                            flex
                                            flex-col
                                            gap-2
                                            justify-center
                                    ">
                                        <Link
                                            href={elem?.href}
                                            className="
                                                flex
                                                flex-row
                                                gap-2
                                            "
                                        >
                                            {<>
                                                <elem.icon
                                                    width={25}
                                                    height={25}
                                                    color={iconColors}
                                                />    
                                                <span 
                                                 className="
                                                   text-xs 
                                                   text-black
                                                ">
                                                    {elem?.placeholder}
                                                </span>                                        
                                            </>}
                                        </Link>
                                    </div>
                                )
                            }
                           
                            }
                        )}
                    </div>


                   </div>
            </Container>
            <MiniFooter/>
       </footer>
    );
};

export default Footer;